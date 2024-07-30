export function loadRealChinese() {
    document.querySelector('.service-title h2').innerHTML = '房地产';
    document.querySelector('.real-1').innerHTML = "我们律师事务所的房地产业务以其专业知识、经验和效率而受到广泛认可。";
    document.querySelector('.real-2').innerHTML = '当我们在房地产交易或租赁的各个阶段代表大量客户时，我们不仅就各种形式的商业和住宅房地产，而且还就房地产开发、融资和运营向客户提供建议。';
    document.querySelector('.real-3').innerHTML = '我们的服务范围包括：';
    document.querySelector('.real-4').innerHTML = `1. <span style="font-weight: bold;">住宅房产交易</span>`;
    document.querySelector('.real-5 p:nth-child(1)').innerHTML = '&#9679; 鸡舍';
    document.querySelector('.real-5 p:nth-child(2)').innerHTML = '&#9679; 公寓';
    document.querySelector('.real-5 p:nth-child(3)').innerHTML = '&#9679; 联排别墅';
    document.querySelector('.real-5 p:nth-child(4)').innerHTML = '&#9679; 房子';
    document.querySelector('.real-6').innerHTML = `2. <span style="font-weight: bold;">商业地产交易</span>`;
    
    document.querySelector('.contact-us-title h2').innerHTML = '联系我们';
    document.querySelector('.contact-form div:nth-child(2) p').innerHTML = '电子邮件 *';
    document.querySelector('.contact-form div:nth-child(2) input').placeholder = '电子邮件';
    document.querySelector('.contact-form div:nth-child(3) p').innerHTML = '姓名 *';
    document.querySelector('.contact-form div:nth-child(3) input').placeholder = '姓名';
    document.querySelector('.contact-form div:nth-child(4) p').innerHTML = '号码 *';
    document.querySelector('.contact-form div:nth-child(4) input').placeholder = '号码';
    document.querySelector('.contact-form div:nth-child(5) p').innerHTML = '信息 (选修)';
    document.querySelector('.contact-form div:nth-child(5) textarea').placeholder = '信息';
    document.querySelector('.contact-form div:nth-child(6) button').innerHTML = '发送';

    document.querySelector('.location-hours-text').innerHTML = '小时';
    document.querySelector('.location-second-div p:nth-child(1)').innerHTML = '周一至周五 9:00am - 5:30pm';
    document.querySelector('.location-see-more').innerHTML = '查看更多 &#8594';
}

export function loadRealEnglish() {
    document.querySelector('.service-title h2').innerHTML = 'REAL ESTATE';
    document.querySelector('.real-1').innerHTML = "Our Law Firm's real estate business is widely recognized for its expertise, experience, and efficiency.";
    document.querySelector('.real-2').innerHTML = 'When we represent a large number of clients at all stages of real estate transactions or leases, we advise clients not only on all forms of commercial and residential real estate, but also on real estate development, financing and operations.';
    document.querySelector('.real-3').innerHTML = 'Our range of services includes:';
    document.querySelector('.real-4').innerHTML = `1. <span style="font-weight: bold;">Residential Real Estate Transaction</span>`;
    document.querySelector('.real-5 p:nth-child(1)').innerHTML = '&#9679; Coop';
    document.querySelector('.real-5 p:nth-child(2)').innerHTML = '&#9679; Condo';
    document.querySelector('.real-5 p:nth-child(3)').innerHTML = '&#9679; Townhouse';
    document.querySelector('.real-5 p:nth-child(4)').innerHTML = '&#9679; House';
    document.querySelector('.real-6').innerHTML = `2. <span style="font-weight: bold;">Commercial Real Estate Transaction</span>`;


    document.querySelector('.contact-us-title h2').innerHTML = 'CONTACT US';
    document.querySelector('.contact-form div:nth-child(2) p').innerHTML = 'Email *';
    document.querySelector('.contact-form div:nth-child(2) input').placeholder = 'Email';
    document.querySelector('.contact-form div:nth-child(3) p').innerHTML = 'Name *';
    document.querySelector('.contact-form div:nth-child(3) input').placeholder = 'Name';
    document.querySelector('.contact-form div:nth-child(4) p').innerHTML = 'Phone *';
    document.querySelector('.contact-form div:nth-child(4) input').placeholder = 'Phone';
    document.querySelector('.contact-form div:nth-child(5) p').innerHTML = 'Message (Optional)';
    document.querySelector('.contact-form div:nth-child(5) textarea').placeholder = 'Message';
    document.querySelector('.contact-form div:nth-child(6) button').innerHTML = 'Send';

    document.querySelector('.location-hours-text').innerHTML = 'Hours';
    document.querySelector('.location-second-div p:nth-child(1)').innerHTML = 'Mon - Fri  9:00am - 5:30pm';
    document.querySelector('.location-see-more').innerHTML = 'See More &#8594';
}
