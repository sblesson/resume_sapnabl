import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import resume from '../assets/images/Blesson_Sapna.pdf';
import neopothosbig from '../assets/images/neopothosbig.jpg';
import PeaceLilly from '../assets/images/PeaceLilly.jpg';
import ficus from '../assets/images/ficus.jpg';
import minipalm from '../assets/images/minipalm.jpg';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className='container-fluid p-0'>
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='about'
      >
        <div className='w-100'>
          <h4 className='mainheading mb-0'>
            {config.firstName}&nbsp;
            <span className='text-primary'>{config.lastName}</span>
          </h4>
          <div className='subheading mb-5'>
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className='lead mb-5'>
            ​A very passionate, kind and empathetic individual with a passion
            for building products with great user experience. I have over 9+
            years of industry experience as a front-end development from
            different companies in Silicon Valley ranging from start-ups to big
            corporations. I was employee #9 of early stage start-up Cybercube,
            worked across the functions; wear mutiple hats and helped building
            the company from ground up all the way to series B funding.
            <br /> <br />
          </p>
          <div className='social-icons'>
            {config.socialLinks.map((social) => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex justify-content-center'
        id='experience'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Experience</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Founder</h3>
              <div className='subheading mb-3'>myclasspals</div>
              <p>
                I created an online community website for connecting families in
                school. I build the front-end of the product using react, redux,
                JavaScript (ES6), HTML5, CSS3. I used CSS pre-processor SASS &
                styled components. I used Ant Design component library to build
                react components.
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Jan 2020 - Present</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Founding engineer</h3>
              <div className='subheading mb-3'>CyberCube</div>
              <p>
                Founding Engineer (employee #9) of early stage startup Cybercube
                based in San san Francisco responsible for all the User
                Interface aspect of products and features.
                <br /> Epic lead bridging the gap between product and
                engineering, co-ordinated with engineering team in SF and remote
                team, understanding end-to-end requirement, responsible for
                building highly integrative application in demanding fast paced
                start-up
                <br /> Great team player passionate about company culture helped
                in scaling company from 16 employees to 85+ and was involved in
                every aspect of companies growth <br />
                Product front-end built on React, Redux, Webpack, Angular JS,
                HTML5, CSS3, SASS, Bootstrap, Highcharts, Serverless
                Architecture, AWS S3 bucket, NodeJS, Puppeteer for PDF
                generation
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Jan 2018 - Nov 2019</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>Senior UI Engineer</h3>
              <div className='subheading mb-3'>​SYMANTEC</div>
              <p>
                Being the only UI developer on catastrophe modelling product for
                cyber insurance ⎯ team responsible for building high quality
                Catastrophe modelling product for cyber insurance <br /> Product
                built on AngularJS, HTML5, CSS3, SASS, Bootstrap, Highcharts ,
                babel and web-pack. <br /> Work with product manager and user
                experience designer to refine the requirements and implement new
                features <br /> Participate and collaborate with product
                manager, UX designer and back-end engineers, QA, data analysts
                and building the product with an eye on improving user
                experience
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>August 2016 - December 2018</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>Senior UI Engineer </h3>
              <div className='subheading mb-3'>​ERICSSON</div>
              <p>
                Developed GUI UI components utilizing the Javascript Module
                Design Pattern producing self-contained, event-driven,
                self-testing software components. ⎯ Worked with HTML5, CSS3,
                Javascript and use third party libraries Require.js, jQuery,
                Backbone.js, Underscore.js, Mocha.js, Chai.js, Sinon.js as well
                as web development tools such as Node.js, Less, jsdoc3 and grunt
                August 2016 – December 2018 July 2014 – August 2016 Oct 2011 –
                July 2014 ⎯ Followed Agile (Scrum) Software Development Life
                Cycle (SDLC) model, including participation in scrum meetings,
                sprint planning, backlog grooming sessions. ⎯ Focused on
                quality, reusability and maintainability by writing UNIT and BIT
                test suit along with developing software ⎯ Participated and
                collaborated on an internal open source framework, with the goal
                of contributing and improving the existing toolset.
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>July 2014 – August 2016</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'> UI Engineer </h3>
              <div className='subheading mb-3'>​DEUTSCHE TELEKOM HBS</div>
              <p>
                Involved in UI development of an early stage start-up which was
                purchased for $100M in 2 years (2013) by Deutsche Telekom. ⎯
                Responsible for UI development of company site using
                CoffeeScript, JQuery, CanJS , HTML, SASS, CSS , ​MySQL, ​JQuery
                template Handlebars, AJAX ⎯ High-quality front-end development
                modular, scalable, robust, and reusable code. ⎯ UI automation
                using selenium, experience working with Git, continuous delivery
                and agile process ⎯ Lead UI developer in implementing Choochee's
                Payment Processing System using JQuery, Extjs, HTML, CSS ⎯
                Responsible for fixing P1 bugs and cross browser issues
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>October 2011 – July 2014</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'> UI Engineer </h3>
              <div className='subheading mb-3'>POWER ASSURE</div>
              <p>
                ⎯ Worked on UI development and server side development using
                PHP, jQuery, AJAX, JavaScript, CSS, XHTML. ⎯ Worked in
                enhancement of the EM/4 and PAR4 products of Power Assure.
                Primary responsibilities include migrating code into object
                oriented zend PHP MVC Framework. ⎯ Created Alert System using
                PHP which creates new alerts and save to the database and sends
                notification email. ⎯ Integrated CSV Upload functionalities/
                features from Web(front-end), CLI Tool and Balancer
                side(back-end) using PHP
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>April 2011 – October 2011</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'> UI Engineer </h3>
              <div className='subheading mb-3'>YAHOO</div>
              <p>
                Designed, developed and implemented Software Tool for Yahoo!
                Customer Care to build a communication process and portal for
                2,000 call center agents to more effectively communicate
                improved suggestions back to leadership. Client won a
                prestigious leadership award through the roll-out of this
                program. ⎯ Designed & developed the interactive user interface
                using HTML, JQuery, JavaScript, CSS, PHP, YUI, AJAX, Apache HTTP
                Web Server, and ORACLE. ⎯ Collaborated with project manager,
                clients and engineering team to deliver high-quality products
                that meet corporate and client needs
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Jun 2010 – Apr 2011</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'> UI Engineer </h3>
              <div className='subheading mb-3'>FUNDAVISION</div>
              <p>
                ⎯ Designed and developed company website based on requirements
                using XHTML, CSS, JavaScript, JQuery, AJAX, Java, and Flex. ⎯
                Implemented the presentation layer with HTML, DHTML, Ajax, CSS,
                JavaScript,MySQL
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Feb 2010 – Jun 2010</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'> UI Engineer </h3>
              <div className='subheading mb-3'>MYLAWSUIT, Inc</div>
              <p>
                Developed website and fixing bugs using PHP, MySQL, JavaScript,
                XHTML, CSS, XAMPP, Joomla <br />
                Created templates in Joomla and worked closely with CEO, Chief
                Architect, VP of Engineering ⎯ Involved in designing the user
                interface mainly focusing on easing access to registration,
                plans and features available on the website using HTML and CSS.
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>August 2009 – Jan 2010</span>
            </div>
          </div>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='education'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Education</h2>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between mb-5'>
            <div className='resume-content'>
              <h3 className='mb-0'>SAN JOSE STATE UNIVERSITY</h3>
              <div className='subheading mb-3'>
                Master's in Computer Science
              </div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Jan 2008 - May 2009</span>
            </div>
          </div>

          <div className='resume-item d-flex flex-column flex-md-row justify-content-between'>
            <div className='resume-content'>
              <h3 className='mb-0'>
                Cochin University of Science and Technology
              </h3>
              <div className='subheading mb-3'>
                {' '}
                Bachelor's in Computer Science
              </div>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>August 2001 - June 2005</span>
            </div>
          </div>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='skills'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Skills</h2>

          <div className='subheading mb-3'>
            Programming Languages &amp; Tools
          </div>
          <ul className='list-inline dev-icons'>
            <li className='list-inline-item'>
              <i className='fab fa-html5'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-css3-alt'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-js-square'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-angular'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-react'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-node-js'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-sass'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-less'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-wordpress'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-gulp'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-grunt'></i>
            </li>
            <li className='list-inline-item'>
              <i className='fab fa-npm'></i>
            </li>
          </ul>

          <div className='subheading mb-3'>Workflow</div>
          <ul className='fa-ul mb-0'>
            <li>
              <i className='fa-li fa fa-check'></i>
              Responsive Front-end Development
            </li>
            <li>
              <i className='fa-li fa fa-check'></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className='fa-li fa fa-check'></i>
              Cross Functional Teams
            </li>
            <li>
              <i className='fa-li fa fa-check'></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className='m-0' />

      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='interests'
      >
        <div className='w-100'>
          <h2 className='mb-5'>Interests</h2>
          <p>
            Apart from front-end development, I love learning new things,
            building different skills. I took classes from various online
            platforms to learn anything that sparks my curiosity. I also love
            listening to audio book on personal growth, enterprenuership and
            leadership. I love container gardening and working with plants, they
            gave a positive, creative vibe to any space. I volunteered to green
            Cybercube's office space. Few pictures shown below:
          </p>
          <div class='container'>
            <div class='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
              <div class='col'>
                <img
                  className='img-fluid   mx-auto mb-2 ml-5'
                  src={ficus}
                  alt=''
                />
              </div>
              <div class='col'>
                {' '}
                <img
                  className='img-fluid  mx-auto mb-2 ml-5'
                  src={PeaceLilly}
                  alt=''
                />
              </div>
              <div class='col'>
                {' '}
                <img
                  className='img-fluid  mx-auto mb-2'
                  src={minipalm}
                  alt=''
                />
              </div>
              <div class='col'>
                {' '}
                <img
                  className='img-fluid  mx-auto mb-2'
                  src={neopothosbig}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className='resume-section p-3 p-lg-5 d-flex align-items-center'
        id='download'
      >
        <div className='w-100'>
          <p>
            {' '}
            <div class='about-resume'>
              <a href={resume} download='' class='about-download-button'>
                DOWNLOAD CV
              </a>
            </div>
          </p>
        </div>{' '}
      </section>

      <hr className='m-0' />
    </div>
  </Layout>
);

export default IndexPage;
