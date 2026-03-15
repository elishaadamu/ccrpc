"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RpcChart from './RpcChart';
import RpcTable from './RpcTable';
import Link from 'next/link';

interface MarkdownRendererProps {
  content: string;
  baseUrl: string;
}

export default function MarkdownRenderer({ content, baseUrl }: MarkdownRendererProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Pre-process content to fix smart quotes
  const processedContent = content
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  // Robust parsing: Split content by <rpc-chart ...> and <rpc-table ...> tags
  const tagRegex = /<(rpc-chart|rpc-table)\b([^>]*?)(\/?)>/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = tagRegex.exec(processedContent)) !== null) {
    const before = processedContent.substring(lastIndex, match.index);
    if (before && before.trim() !== '') {
      parts.push(
        <div key={`md-${lastIndex}`} className="usa-prose">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={markdownComponents(baseUrl, setLightboxImage)}
          >
            {before}
          </ReactMarkdown>
        </div>
      );
    }

    const tagName = match[1];
    const attrString = match[2];
    const isSelfClosing = match[3] === '/';
    
    const attrs: any = {};
    const attrRegex = /([a-z-]+)=["']([^"']*)["']/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrString)) !== null) {
      attrs[attrMatch[1]] = attrMatch[2];
    }

    let csvUrl = attrs.url;
    if (csvUrl && !csvUrl.startsWith('/') && !csvUrl.startsWith('http')) {
      csvUrl = `/lrtp2045/${baseUrl}/${csvUrl}`;
    }

    if (tagName === 'rpc-chart') {
      parts.push(
        <div key={`chart-${match.index}`} className="margin-y-4">
          <RpcChart 
            url={csvUrl} 
            type={attrs.type || 'bar'} 
            title={attrs['chart-title'] || attrs.title} 
            source={attrs.source} 
            description={attrs.description}
            stacked={attrs.stacked === 'true'}
            yLabel={attrs['y-label']}
          />
        </div>
      );
    } else if (tagName === 'rpc-table') {
      parts.push(
        <div key={`table-${match.index}`} className="margin-y-4">
          <RpcTable 
            url={csvUrl} 
            title={attrs['table-title'] || attrs.title} 
            source={attrs.source} 
            description={attrs.description}
          />
        </div>
      );
    }

    lastIndex = tagRegex.lastIndex;
    if (!isSelfClosing) {
      const closeTag = `</${tagName}>`;
      const nextContent = processedContent.substring(lastIndex);
      const closeIdx = nextContent.indexOf(closeTag);
      if (closeIdx !== -1 && closeIdx < 50) {
        lastIndex += closeIdx + closeTag.length;
        tagRegex.lastIndex = lastIndex;
      }
    }
  }

  const remaining = processedContent.substring(lastIndex);
  if (remaining && remaining.trim() !== '') {
    parts.push(
      <div key={`md-${lastIndex}`} className="usa-prose">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={markdownComponents(baseUrl, setLightboxImage)}
        >
          {remaining}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="markdown-content">
      {parts}
      
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay" 
          onClick={() => setLightboxImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
        >
          <img 
            src={lightboxImage} 
            alt="Lightbox" 
            style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '4px' }}
          />
          <button 
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

function markdownComponents(baseUrl: string, setLightboxImage: (src: string) => void) {
  return {
    h1: ({node, ...props}: any) => <h1 {...props} id={props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} className="margin-top-6 margin-bottom-2" />,
    h2: ({node, ...props}: any) => <h2 {...props} id={props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} className="margin-top-6 margin-bottom-2" />,
    h3: ({node, ...props}: any) => <h3 {...props} id={props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')} className="margin-top-5 margin-bottom-1" />,
    p: ({node, ...props}: any) => <p {...props} className="margin-bottom-3 line-height-sans-5" />,
    ul: ({node, ...props}: any) => <ul {...props} className="markdown-list margin-left-2 margin-bottom-3" />,
    ol: ({node, ...props}: any) => <ol {...props} className="markdown-list-ordered margin-left-2 margin-bottom-3" />,
    li: ({node, ...props}: any) => <li {...props} className="markdown-list-item margin-bottom-1" />,
    a: ({node, ...props}: any) => {
      const href = (props.href || "") as string;
      const relativeHref = href.replace('https://ccrpc.gitlab.io/lrtp2045/', '/').replace(/\/$/, '');
      if (relativeHref.startsWith('/') || relativeHref.startsWith('#')) {
        return <Link href={relativeHref} className="usa-link" {...props}>{props.children}</Link>;
      }
      return <a {...props} className="usa-link" target="_blank" rel="noopener noreferrer">{props.children}</a>;
    },
    img: ({node, ...props}: any) => {
      const src = (props.src || "") as string;
      let fixedSrc = src;
      if (!src.startsWith('http') && !src.startsWith('/')) {
        fixedSrc = `/lrtp2045/${baseUrl}/${src}`;
      } else if (src.startsWith('/lrtp2045/')) {
        // keep as is
      } else if (src.startsWith('/')) {
         fixedSrc = `/lrtp2045${src}`;
      }
      return (
        <img 
          {...props} 
          src={fixedSrc} 
          className="usa-img margin-y-2 cursor-zoom-in" 
          onClick={() => setLightboxImage(fixedSrc)}
          style={{ cursor: 'zoom-in' }}
        />
      );
    },
  } as any;
}
