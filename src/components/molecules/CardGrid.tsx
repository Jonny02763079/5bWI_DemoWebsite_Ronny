import Card from '../atoms/Card';
import styles from './CardGrid.module.css'

export default function CardGrid() {

    const url = "https://picsum.photos/200"

    const arrayOfPeople = [
        {
            name: "Max Mustermann",
            description: "Ein leidenschaftlicher Softwareentwickler mit einem Interesse an Web-Technologien."
        },
        {
            name: "Anna Schmidt",
            description: "Eine kreative Designerin, die sich auf UX/UI-Design spezialisiert hat."
        },
        {
            name: "Peter Müller",
            description: "Ein erfahrener Projektmanager mit über 10 Jahren Erfahrung in der IT-Branche."
        },
        {
            name: "Laura Becker",
            description: "Eine Marketing-Expertin, die sich auf digitale Strategien konzentriert."
        },
        {
            name: "Thomas Schwarz",
            description: "Ein Datenanalyst, der gerne mit großen Datenmengen arbeitet und wertvolle Einblicke liefert."
        },
        {
            name: "Julia Fischer",
            description: "Eine Frontend-Entwicklerin, die leidenschaftlich an modernen Webanwendungen arbeitet."
        },
        {
            name: "Michael Wagner",
            description: "Ein Backend-Entwickler, der sich auf serverseitige Technologien spezialisiert hat."
        },
        {
            name: "Katrin Klein",
            description: "Eine HR-Spezialistin, die sich auf Talentmanagement und Mitarbeiterentwicklung konzentriert."
        },
        {
            name: "Felix Meyer",
            description: "Ein Vollzeit-Tee-Trinker und Teilzeit-Entwickler, der in seiner Freizeit an Open-Source-Projekten arbeitet."
        },
        {
            name: "Sophie Schmidt",
            description: "Eine leidenschaftliche Content-Strategin, die Geschichten erzählt und Marken zum Leben erweckt."
        }
    ];


    return (
        <div>
            <h1 className={styles['headLine']}>HTL Dornbirn 5aWP</h1>
            <div className={styles['cardsContainer']}>
                {arrayOfPeople.map(element => (
                    <Card key={element.name} name={element.name} description={element.description} url={url} />
                ))}
            </div>
        </div>
    )
}
