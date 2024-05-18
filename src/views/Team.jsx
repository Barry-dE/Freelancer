import "../../src/styles/views/team.scss";
import teamImages from "../data/team-images.json";
export default function Team() {
    return (
        <section className="team">
            <div className="team__wrapper">
                <div className="team__text__title">
                    <p>Brains Behind Our Vision.</p>
                </div>

                <div className="team__gallery">
                    <div className="team__gallery__wrapper">
                        {teamImages.map((image) => (
                            <div
                                className="team__gallery__media__wrapper"
                                key={image.role}
                            >
                                <figure className="team__gallery__media">
                                    <img
                                        src={`/assests/${image.image}`}
                                        alt={image.name}
                                        className="team__gallery__media__image"
                                    />
                                </figure>
                                <div className="team__media__text">
                                    <p className="team__media__name">
                                        {image.name}
                                    </p>
                                    <p className="team__media__role">
                                        {image.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
