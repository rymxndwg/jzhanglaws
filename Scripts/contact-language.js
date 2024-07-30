export function loadContactChinese() {
    document.querySelector('.service-title h2').innerHTML = '让我们听听您的声音';
    document.querySelector('.service-text p:nth-child(1)').innerHTML = '在Jzhang Associates and PC，我们致力于提供卓越的法律服务，以满足每位客户的独特需求。我们鼓励开放式沟通，并重视协助您处理法律事务的机会。';
    document.querySelector('.service-text p:nth-child(2)').innerHTML = '无论您有疑问、需要指导还是准备讨论您的案例，我们都欢迎您与我们联系。我们的团队随时倾听、提供专家建议并努力工作，为您实现最佳结果。';
    document.querySelector('.service-text p:nth-child(3)').innerHTML = '请立即联系我们安排咨询或详细了解我们如何支持您自信、清晰地应对复杂的法律。您的满意和成功是我们的首要任务，我们期待为您服务。';

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

export function loadContactEnglish() {
    document.querySelector('.service-title h2').innerHTML = 'LET US HEAR FROM YOU';
    document.querySelector('.service-text p:nth-child(1)').innerHTML = 'At Jzhang Associates and PC, we are dedicated to providing exceptional legal services tailored to meet the unique needs of each client. We encourage open communication and value the opportunity to assist you with your legal matters.';
    document.querySelector('.service-text p:nth-child(2)').innerHTML = 'Whether you have questions, need guidance, or are ready to discuss your case, we welcome you to reach out to us. Our team is here to listen, provide expert advice, and work diligently to achieve the best possible outcomes for you.';
    document.querySelector('.service-text p:nth-child(3)').innerHTML = 'Contact us today to schedule a consultation or to learn more about how we can support you in navigating the complexities of the law with confidence and clarity. Your satisfaction and success are our priorities, and we look forward to serving you.';


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
