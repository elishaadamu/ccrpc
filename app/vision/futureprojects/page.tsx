import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';

const tipProjects = [
  ["Champaign County", "All County Highways", "System-Wide Guardrail Upgrade on All Champaign County Highways", "CC-18-01"],
  ["Champaign", "Armory Avenue from Fourth Street to Wright Street and Wright Street from Springfield Avenue to Armory Avenue", "MCORE Project 4: The roadway will be redesigned to safely accommodate all users including the implementation of bicycle facilities and enhancements to bus stops throughout the corridor", "CH-18-08, MTD-18-01, UI-18-01"],
  ["Champaign", "Prospect Avenue from Curtis Road to Windsor Road", "Complete street engineering and reconstruction", "CH-19-05, SA-19-01"],
  ["Champaign", "St. Mary's Road from Neil Street to Fourth Street", "University project to improve pedestrian and bicycle access", "CH-21-05"],
  ["Champaign", "Mattis Avenue from Windsor Road to Curtis Road", "Complete street reconstruction including 3 lanes of pavement, curb/gutter, storm sewers, bike lanes, sidewalks and streetlights", "CH-23-05"],
  ["Mahomet", "Sunny Acres Road from Oak Street to S Mahomet Road", "Pavement reconstruction and shoulder widening", "MA-18-02"],
  ["Mahomet", "Sangamon River Greenway", "Six-foot wide concrete trail from parking lot through forest to launch site at river - launch site will include overlook, bench, accessible turnaround, and concrete ramp for kayak and canoe launch", "MA-18-03"],
  ["Mahomet", "North Division Street from Maple Street to north of State Street", "Milling and HMA resurfacing", "MA-22-01"],
  ["MTD", "Illinois Terminal, 45 E University Avenue", "Illinois Terminal expansion - joint development project", "MTD-19-02"],
  ["MTD", "MTD Maintenance Facility", "Implementation of hydrogen fuel cell facilities and infrastructure to support two zero-emission hydrogen fuel cell buses", "MTD-19-04"],
  ["Savoy", "Hartwell Drive from Airport Road to Hartwell Cul-de-sac", "Hartwell Drive reconstruction", "SA-20-06"],
  ["Savoy", "Curtis Road from Wesley Avenue to Dunlap Avenue", "Curtis Road Complete Streets Project: improvements include 4-Lane cross section with bi-directional turning lane, off-street shared-use paths north and south of roadway, widen intersection and update traffic signals", "SA-20-05"],
  ["State of Illinois", "US 150/US 45, University Avenue from Wright Street to Cunningham Avenue in Urbana", "Pavement marking, sidewalks, lighting, ADA improvements, traffic signal modernization - including land acquisition, railroad flagger, and utility adjustment", "J005"],
  ["State of Illinois", "I-57/I-74 Interchange", "Interchange reconstruction including bridge work, land acquisition, utility adjustment, and engineering", "A167"],
  ["State of Illinois", "At ICRR, TR 158, and Market Street in Champaign", "Bridge work", "H353/H352"],
  ["State of Illinois", "I-74 from Prospect Avenue in Champaign to University Avenue in Urbana", "Microsurfacing 2 Pass from Prospect Avenue to Cunningham Avenue, Resurfacing (SMART) from Cunningham Avenue to University Avenue", "K005B"],
  ["State of Illinois", "Leverett Road from Market Street to US 45", "Designed Overlay", "F206"],
  ["Urbana Park District", "Park Street from Broadway Avenue to Church Street/McCullough Street", "Engineering and construction of 10-foot-wide shared-use sidepath on Park Street", "UPD-17-01"],
  ["Urbana", "Green Street from Busey Avenue to Race Street", "MCORE Project 5: ADA accessible ramps, sidewalk improvements, bus stop improvements, bicycle facilities, roadway surfaces, curb and gutter repair and replacement", "CH-18-09, UR-18-05, MTD-18-02, UI-18-02"],
  ["Urbana", "Lincoln Avenue and Springfield Avenue Resurfacing south of University Avenue and north of Green Street", "ADA accessible ramps, sidewalk repair and replacement, refuge islands, roadway surfaces, curb and gutter repair and replacement", "UR-20-06"],
  ["Urbana", "Florida Avenue from west of Lincoln Avenue to east of Vine Street", "Complete street reconstruction/rehabilitation", "UR-23-06"]
];

const unfundedProjects = [
  ["1", "Champaign", "Windsor from Fields South Drive to Staley Road", "Oil and chip road upgrade to two/three lanes with bike lanes"],
  ["2", "Champaign", "Duncan Road from Springfield Avenue to Kirby Avenue", "Complete street reconstruction: Significant residential growth has taken place along and around Duncan Road between Springfield Avenue and Kirby Avenue creating higher traffic volumes than in the past. This project would improve Duncan Road to include bike and pedestrian facilities."],
  ["3", "Champaign", "Kirby Avenue from Duncan Road to Staley Road", "Street reconstruction with proposed typical sections of two lanes with bike lanes, including turn lanes at major cross streets or a three lane section depending on the driveway and side street situation for each"],
  ["4", "Champaign", "Kirby Avenue betweeen Staley Road to Rising Road", "Oil and chip road upgrade to two/three lanes with bike lanes"],
  ["5", "Champaign", "Windsor Road from Staley Road to Rising Road", "Oil and chip road upgrade to two/three lanes with bike lanes"],
  ["6", "Champaign", "Staley Road and I-72 Bridge Approaches", "Improve approaches similar to Windsor Road and Bradley Avenue approachs (two auto lanes with bike lanes)"],
  ["7", "Champaign", "Rising Road from north of Kirby Avenue to south of Windsor Road", "Oil and chip road upgrade to two or three lanes with bike lanes"],
  ["8", "Champaign", "Prospect Avenue from Interstate Drive to Olympian Drive", "resurfaced in 2018; eventual upgrade to three lane section with lighting and bike lanes"],
  ["9", "Champaign", "Staley Road from Springfield Avenue to Windsor Road", "Per CUUATS corridor study add a center turn lane, bike lanes, fill in sidewalk gaps"],
  ["10", "Champaign", "Interstate Drive east to Market Street", "Extend Interstate Drive to Market Street"],
  ["11", "Champaign", "Neil Street from Interstate Drive to Olympian Drive", "Extend Neil Street up to Olympian Drive"],
  ["12", "Champaign", "Neil Street from I-74 to Park Street", "Implement the recommendations of the North Neil Corridor Study form I-74 to Downtown Champaign"],
  ["38", "Champaign", "Curtis Road improvements from Staley Road and Rising Road", "The remaining section of Curtis Road, between Staley Road and Rising Road, is proposed to be upgraded to improve safety with multi-use trails on both sides of the roadway."],
  ["40", "Champaign", "Windsor Road from Mattis Avenue to Duncan Road", "Complete street reconstruction: This section of Windsor Road narrows from four lanes to two lanes west of Mattis Avenue. This project would widen Windsor Road to include bike and pedestrian facilities (complete street) and possible additional vehicle lanes."],
  ["13", "Mahomet", "South Mahomet Road extension to Prairieview Road", "Rural cross-section with bikepath and sidewalk to make the connection from IL 47 to Prairieview Road (and I-74 interchange)"],
  ["35", "Mahomet", "US 150 and Lake of the Woods Road", "Traffic signal installation"],
  ["46", "Mahomet", "Patton Drive form Churchill Road to Prairieview Road", "Extend of Patton Drive to Prairieview Road"],
  ["41", "Mahomet", "US 150 and Purnell Drive", "Traffic signal installation"],
  ["28", "Savoy", "West Church Street from Dunlap Avenue to Mattis Avenue", "Road widening and pavement."],
  ["30", "Savoy", "Mattis Avenue from Church Street north to corporate limits (just north of Declaration Drive)", "Road widening and pavement."],
  ["29", "Savoy", "First Street from Church Street to Airport Road", "Roadway improvement."],
  ["31", "Savoy", "Curtis Road from Dunlap Avenue to First Street", "Roadway reconstruction including a railroad grade separation and pedestrian and bicycle facilities."],
  ["14", "University of Illinois", "Peabody Drive from Fourth Street to Wright Street", "Sidewalk and bike path improvements"],
  ["15", "University of Illinois", "Sixth Street from Gregory Drive to Pennsylvania Avenue", "Curb Reconfiguration, sidewalk improvements, and add bike sharrows."],
  ["16", "University of Illinois", "Goodwin Avenue North of Hazelwood Drive", "Modified subgrade, resurfacing, and limited curb work."],
  ["17", "University of Illinois", "Pennsylvania Avenue from City Limit to Lincoln Avenue", "Reconstruction with bike sharrows, sidewalk, and ramp improvements"],
  ["18", "University of Illinois", "Kirby Avenue at Oak Street", "Traffic signal controller upgrades"],
  ["19", "University of Illinois", "Gregory Street from Nevada Street to Oregon Street", "Reconstruction"],
  ["20", "University of Illinois", "Goodwin Avenue from Pennsylvania Avenue to Peabody Drive", "Reconstruction"],
  ["21", "University of Illinois", "Dorner Drive from Gregory Drive to Pennsylvania Avenue", "Reconstruction"],
  ["22", "University of Illinois", "Gregory Drive from Goodwin Avenue to circle", "Reconstruction"],
  ["23", "University of Illinois", "Goodwin Avenue from Gregory Drive to Nevada Street", "Reconstruction"],
  ["24", "University of Illinois", "Lincoln Avenue from Florida Avenue south (approximately 400 ft)", "Reconstruction"],
  ["25", "University of Illinois", "Oak Street from Kirby Avenue to Hazelwood Drive", "Reconstruction, road diet, bike lanes, sidewalk on west side, and ramp Improvements east side."],
  ["26", "University of Illinois", "Peabody Drive from Sixth Street east (to end)", "Reconstruction, sidewalk, and ramp improvements."],
  ["27", "University of Illinois", "Gerty Drive from First Street to Griffith Drive", "Reconstruction, sidewalk, and ramp improvements."],
  ["47", "Urbana", "Lincoln Avenue from Nevada Street to Pennsylvania Avenue", "Safety improvements"],
  ["33", "Urbana", "Florida Avenue from Abercorn Street to High Cross Road", "Street construction including bike path and intersection work including signals, developer-funded."],
  ["34", "Urbana", "Washington Street from Pfeffer Road to Scottswood Drive", "Street reconstruction as urban cross section."],
  ["36", "Urbana", "Olympian Drive from Lincoln Avenue to US 45", "Preliminary design, design engineering, right-of-way, and construction."],
  ["37", "Urbana", "Airport Road extension from Willow Road to Lincoln Avenue", "Location Study update, preliminary design, design engineering, right-of-way, construction."],
  ["39", "Urbana", "Reconstruction of Lincoln Avenue north and south of Somer Drive", "Street reconstruction"],
  ["32", "Urbana", "I-74 Interchange (at Cottonwood Dr)", "Construction, design engineering, right of way for interchange. Location undetermined."],
  ["44", "Urbana", "Race Street from Windsor Road to Curtis Road", "(pending construction of shared use path on north side of Curtis Road) Add shoulders, continue shared use path on east side of road to connect to shared use path on north side of Curtis Road."],
  ["45", "Urbana", "Philo Road from Windsor Road to Curtis Road", "(pending construction of shared use path on north side of Curtis Road)Add shoulders, continue shared use path on east side of road to connect to shared use path on north side of Curtis Road."],
  ["42", "Urbana, University of Illinios", "Curtis Road from First Street to IL 130/High Cross Road", "If a railroad grade separation is implemented on Curtis Road, this section should be reconstructed as a 2-lane rural cross section with 8-foot shoulders, pavement markings, and improved field entrances, bridge replacement. "],
  ["43", "Urbana, University of Illinios", "Curtis Road from First Street to Philo Road", "If warrented after the roadway is reconstructed as a 2-lane rural cross section, add bike lanes and continue the paved shared use path on the north side of Curtis Road, connecting north to the shared use paths on the east sides of Race Street and Philo Road. Studies should be done at the intersections of Race Street and Philo Road intersections to study the feasibility of changing the four-way stop control to roundabouts or signals."]
];

export default function FutureProjects() {
  return (
    <>
      <Header />

      <main id="main-content">
        <section className="usa-hero" style={{ backgroundImage: "url('/lrtp2045/vision/banner.jpg')" }}>
          <div className="grid-container">
            <div className="usa-hero__callout">
              <h1 className="usa-hero__heading">
                <span className="usa-hero__heading--alt">Future Projects</span>
              </h1>
              <p>
                CUUATS staff used <a href="/process/round-one">public input from the first round of LRTP 2045 outreach</a>, input from local agencies, and local planning documents to establish the LRTP 2045 goals (safety, multimodal connectivity, economy, equity, and the environment) along with a list of transportation system changes that could contribute to the realization of the goals.
              </p>
            </div>
          </div>
        </section>

        <div className="usa-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <aside className="usa-layout-docs__sidenav grid-col-12 desktop:grid-col-3">
                <SideNav items={[
                  { href: "/vision/futureprojects", label: "Future Projects", active: true },
                  { href: "#future-projects-regionally-significant-vision-projects", label: "Regionally Significant Vision Projects" },
                  { href: "#future-projects-fiscally-constrained", label: "Fiscally Constrained" },
                  { href: "#future-projects-local-and-unfunded", label: "Local and Unfunded" }
                ]} />
              </aside>

              <div className="usa-layout-docs__main grid-col-12 desktop:grid-col-9 usa-prose">
                <h1>Future Projects</h1>
                <p>
                  Public input regarding the <em>future</em> transportation system came from responses to a question asking people to prioritize the three most important factors that will shape our transportation system over the next 25 years. The combined input about the current and future transportation system conveyed strong public support for a set of overlapping ideas about the future of transportation: a more environmentally sustainable transportation system, additional pedestrian and bicycle infrastructure, shorter off-campus transit times, equitable access to transportation services, and a compact urban area that supports active transportation and limits sprawl development.
                </p>

                <h2 id="future-projects-regionally-significant-vision-projects">Future Projects: Regionally Significant Vision Projects</h2>
                <p>
                  The graphic below highlights the overarching transportation goals for the future alongside regionally-significant transportation projects as part of the LRTP 2045 future vision. The regionally-significant projects and collectively-defined goals are connected in the graphic to illustrate how individual improvement projects can complement other projects to improve the overall system over time. Some projects are already funded and in progress while others are considered an illustrative, un-funded part of the LRTP vision for 2045.
                </p>

                <div className="plandoc-image-container">
                  <img 
                    src="/lrtp2045/vision/futureprojects/lrtp_vision_board.jpg" 
                    alt="Chart of LRTP 2045 goals listed with regionally significant vision projects and an illustrative map" 
                  />
                  <p className="usa-hint">Note: To expand the image to full-size, right-click the graphic and choose &apos;open image in new tab&apos;.</p>
                </div>

                <p>
                  The intent of the following vision video is to get people thinking about the future and imagining different changes in the local community in 2045. This video is not intended to be a comprehensive or literal representation of the LRTP 2045.
                </p>
                
                <div className="usa-embed-container">
                  <iframe 
                    src="https://www.youtube-nocookie.com/embed/MwJMS9c31dc" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Champaign-Urbana Long Range Transportation Plan Vision Video"
                  ></iframe>
                </div>

                <h2 id="future-projects-fiscally-constrained">Future Projects: Fiscally Constrained</h2>
                <p>
                  As part of the LRTP, the Federal Highway Administration requires a listing of the fiscally constrained projects that are part of the overall vision for the urbanized area. The fiscally constrained projects are those that have either guaranteed or reasonably guaranteed funding secured for the completion of the project. A separate federally-required document for the region, the Transportation Improvement Program (TIP) lists fiscally-constrained transportation projects anticipated to be constructed in the metropolitan planning area during the next four years.
                </p>
                
                <table className="usa-table">
                  <thead>
                    <tr>
                      <th>Lead Agency</th>
                      <th>Project Location</th>
                      <th>Project Description</th>
                      <th>TIP Project ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tipProjects.map((project, i) => (
                      <tr key={i}>
                        <td>{project[0]}</td>
                        <td>{project[1]}</td>
                        <td>{project[2]}</td>
                        <td>{project[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h2 id="future-projects-local-and-unfunded">Future Projects: Local and Unfunded</h2>
                <p>
                  Each agency in the region has its own set of transportation priorities and goals to improve mobility in their respective jurisdiction alone and in conjunction with surrounding jurisdictions. The following list includes local project priorities for the future that are currently un-funded.
                </p>

                <table className="usa-table">
                  <thead>
                    <tr>
                      <th>Map Number</th>
                      <th>Lead Agency</th>
                      <th>Project Location</th>
                      <th>Project Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unfundedProjects.map((project, i) => (
                      <tr key={i}>
                        <td>{project[0]}</td>
                        <td>{project[1]}</td>
                        <td>{project[2]}</td>
                        <td>{project[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
