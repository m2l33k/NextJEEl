import React, { useState } from 'react';
import '../styles/scholarships.css';

const Scholarships = () => {
    const [scholarships] = useState([
        {
            name: 'Tunisia Undergraduate Scholarship Program (Tunisia UGRAD)',
            eligibility: 'Full scholarships for undergraduate study in the US.',
            imageSrc: 'https://exchanges.state.gov/files/exchanges/styles/exchange_program_banner/public/program-banners/c4_certificates_2016-2017_2.png?itok=39m44wC8', // Replace with actual image URL
            url: 'https://exchanges.state.gov/non-us/program/tunisia-undergraduate-scholarship-program?utm_source=chatgpt.com'
        },
        {
            name: 'Tunisia Community College Scholarship Program (TCCSP)',
            eligibility: 'One-year scholarships for young Tunisians at technical schools in Tunisia.',
            imageSrc: 'https://tn.usembassy.gov/wp-content/uploads/sites/59/468336926_1058231499664609_792259299734220224_n-1140x684.jpg', // Replace with actual image URL
            url: 'https://tn.usembassy.gov/education-culture/programs-for-students/?utm_source=chatgpt.com'
        },
        {
            name: 'SMU Foundation Scholarships',
            eligibility: 'Scholarships for students to pursue education at Mediterranean School of Business.',
            imageSrc: 'https://www.smu.tn/storage/app/uploads/public/25c/e08/dca/thumb__450_450_0_0_auto.jpg', // Replace with actual image URL
            url: 'https://www.smu.tn/fondation-smu/scholarships-detail?utm_source=chatgpt.com'
        },
        {
            name: 'DAAD Scholarships',
            eligibility: 'Various scholarships for Tunisian students to study in Germany.',
            imageSrc: 'https://www.daad.tn/files/2022/06/20061110uw0054_864x486px.jpg', // Replace with actual image URL
            url: 'https://www.daad.tn/en/find-funding/scholarship-database/?utm_source=chatgpt.com'
        },
        {
            name: 'Scholarships for Tunisian Students',
            eligibility: 'Various scholarships for Tunisian students for studies abroad and in Tunisia.',
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tmcf.org%2Fwp-content%2Fuploads%2F2019%2F08%2Fabout-scholarships-banner.jpg&f=1&nofb=1&ipt=5c77a932e6c9a7a3553a5ee5320f4f1f034be9146080e409064e943d77f88a42&ipo=images', // Replace with actual image URL
            url: 'https://www.scholarshipbob.com/scholarships-for/tunisia?utm_source=chatgpt.com'
        },
        {
            name: 'Scholarships in Tunisia for International Students',
            eligibility: 'Scholarships for international students to study in Tunisia.',
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4215502.jpg&f=1&nofb=1&ipt=844198b313555f573e8d42d9753d4955c21b2823cc61c5a886370ebaff42b879&ipo=images', // Replace with actual image URL
            url: 'https://www.scholarshipsads.com/scholarships-for/tunisia/?utm_source=chatgpt.com'
        },
        {
            name: 'Scholarships for Tunisian Students 2024 - 2025',
            eligibility: 'Fully-funded and partial scholarships for Tunisian students.',
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.SWohLsRAC8bKNn8h_FbHlQHaEK%26pid%3DApi&f=1&ipt=ebbe58e68915e851d7f0ac7984cbebb283cd8c520caededd4be87d5d84c2baf1&ipo=images', // Replace with actual image URL
            url: 'https://www.scholarshipbob.com/scholarships-for/tunisia?utm_source=chatgpt.com'
        },
        {
            name: 'Scholarships in Tunisia for International Students 2025-2026',
            eligibility: 'Scholarships for international students in Tunisia for 2025-2026.',
            imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.y9YI_X527oDtOCQNbf2e0QHaDb%26pid%3DApi&f=1&ipt=1600636753c6022e1cfe4803d6f85ec90f26572f226046070c3ebd032f53d6dc&ipo=images', // Replace with actual image URL
            url: 'https://www.scholarshiptab.com/scholarships-in/tunisia?utm_source=chatgpt.com'
        }
    ]);

    return (
        <div className="scholarships">
            <h2>Available Scholarships</h2>
            <div className="scholarships-container">
                {scholarships.length > 0 ? (
                    scholarships.map((scholarship, index) => (
                        <div key={index} className="scholarship-card">
                            <img
                                src={scholarship.imageSrc}
                                alt={scholarship.name}
                                className="scholarship-image"
                            />
                            <h3>{scholarship.name}</h3>
                            <p>{scholarship.eligibility}</p>
                            <a href={scholarship.url} target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No scholarships available.</p>
                )}
            </div>
        </div>
    );
};

export default Scholarships;
