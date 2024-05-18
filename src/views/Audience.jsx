import "../../src/styles/views/audience.scss";

export default function Audience() {
    return (
        <section className="audience">
            <div className="audience__wrapper">
                <div className="audience__content">
                    <div className="audience__text__title">
                        <h2 className="audience__title">
                            Open doors, diverse minds: welcomes all
                        </h2>
                    </div>
                    <div className="audience__physics">
                        <div className="audience__physics__text">
                            <div className="audience__icon"></div>
                            <p>Freelancers </p>
                        </div>
                        <div className="audience__physics__text">
                            <div className="audience__icon"></div>
                            <p>Students</p>
                        </div>
                        <div className="audience__physics__text">
                            <div className="audience__icon"></div>
                            <p>Remote workers</p>
                        </div>
                        <div className="audience__physics__text">
                            <div className="audience__icon"></div>
                            <p>Coporate employees</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
