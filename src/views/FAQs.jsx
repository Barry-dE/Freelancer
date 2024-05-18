import "../../src/styles/views/faqs.scss";

export default function FAQs() {
    const questions = [
        {
            id: 1,
            question: "What amenities are included in the coworking space?",
            answer: "Our coworking space is meticulously crafted to cater to your professional needs, offering an array of amenities tailored to enhance your work experience. With high-speed internet connectivity, flexible workspaces including shared desks, dedicated desks, and private offices, along with fully-equipped meeting rooms, you will find everything you need to thrive.",
        },
        {
            id: 2,
            question:
                "Can I use the coworking space on weekends and after hours?",
            answer: "Our coworking space is available for use on weekends and after hours, providing you with flexibility to work according to your schedule. Whether you need a quiet space to focus on a Saturday afternoon or want to burn the midnight oil on a project, our facilities are here to accommodate your needs outside of regular business hours.",
        },
        {
            id: 3,
            question:
                "How do I book meeting rooms, and is there an additional cost?",
            answer: "Booking meeting rooms is easy! You can reserve them through our online booking system or by contacting our front desk staff directly. As for additional costs, it depends on your membership plan. Some plans include meeting room access as part of the package, while others may require an additional fee for room usage.",
        },
        {
            id: 4,
            question:
                "Are there any networking or community events held at the coworking space?",
            answer: "We frequently host networking and community events at our coworking space. These events provide valuable opportunities for collaboration, skill-building, and expanding your professional network. Keep an eye on our event calendar or sign up for our newsletter to stay updated on upcoming events.",
        },
        {
            id: 5,
            question: " Can I bring guests or clients to the coworking space?",
            answer: "You are welcome to bring guests or clients to our coworking space. Whether you need to meet with clients, collaborate with colleagues, or simply want to introduce someone to our community, you're free to invite guests during your visits.",
        },
        {
            id: 6,
            question: " Is parking available at the coworking space?",
            answer: "Parking is available at our coworking space. We offer convenient parking facilities for members and visitors, making it easy for you to access our workspace without any hassle.",
        },
    ];
    return (
        <section className="questions">
            <div className="questions__wrapper">
                <div className="questions__title__text">
                    <p>FAQ’S</p>
                </div>
                <div className="questions__content">
                    <div className="questions__content__wrapper">
                        <div className="questions__content__question">
                            {questions.map((question) => {
                                return (
                                    <div
                                        className="questions__question"
                                        key={question.id}
                                    >
                                        <div className="questions__question__text">
                                            <p>{question.question}</p>
                                            <figure className="questions__question__icon">
                                                <img src="" alt="" />
                                            </figure>
                                        </div>
                                        <div className="questions__question__answer">
                                            <p>{question.answer}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
