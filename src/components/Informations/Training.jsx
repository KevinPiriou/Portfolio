import { Badge, Button } from "react-bootstrap";

import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

const Training = () => {
  return (
    <div>
      <p className="display-5 text-6xl text-t-primary p-4 font-display tracking-wider  ">
        Mes Formations
      </p>
      <Timeline lineColor={{ color: "#1E1D22" }}>
        <TimelineItem
          key="001"
          dateText="12 Sept 22 – 06 Sept 23"
          dateInnerStyle={{
            backgroundImage:
              "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
            color: "#D14F09",
            fontFamily: "Coda",
          }}
          style={{ color: "#71BC68" }}
          bodyContainerStyle={{
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",
            padding: "20px",
            border: "solid #54b3d6 2px",
            borderRadius: "30px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            fontFamily: "Coda",
            color: "whitesmoke",
          }}
        >
          <Badge pill bg="danger" className="mb-2">
            {" "}
            En recherche d'un contrat{" "}
          </Badge>

          <h3
            style={{
              color: "white",
              textShadow: "3px 2px 3px rgba(255,255,255,.2)",
            }}
          >
            <strong>Concepteur Développeur d’Application</strong>
          </h3>
          <br></br>
          <h5>@WILD CODE SCHOOL - Niveau 6</h5>
          <br></br>
          <h5>- En distanciel pour la période école - </h5>

          <hr></hr>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            Notre programme est conçu pour compléter votre formation initiale.
            Tous les mois, vous êtes 1 semaine en centre et 3 semaines en
            entreprise, sauf les 3 derniers mois consécutifs où vous êtes 100%
            en entreprise. Ainsi, grâce à l’expertise de nos formateurs dédiés
            et à notre pédagogie hybride basée sur une plateforme pédagogique en
            ligne et la réalisation de projets concrets, vous gagnez rapidement
            en expérience et développez votre réseau pour être en maîtrise
            totale avant d’intégrer le marché du travail. Cette année de
            formation vous mène au passage du titre “Concepteur Développeur
            d’Applications”, inscrit au RNCP (équivalent bac + 4).
          </p>
          <h5 style={{ color: "whitesmoke" }}>
            {" "}
            <strong>1 an pour devenir développeur web avancé:</strong>
          </h5>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            L'objectif de cette formation en alternance est de permettre à toute
            personne ayant déjà une expérience dans le développement web, quel
            que soit son profil (reconversion professionnelle, montée en
            compétences…), d'acquérir les compétences techniques et humaines
            nécessaires pour propulser avec succès votre carrière dans le
            développement web. À l’issue de votre formation professionnelle,
            vous aurez les compétences nécessaires pour développer une
            application web, concevoir une architecture avancée, déployer en
            continu, consolider vos soft-skills tech, et surtout, apprendre à
            faire votre veille pour rester toujours à jour sur les nouvelles
            technologies demandées sur le marché.
          </p>
          <h5 style={{ color: "whitesmoke" }}>
            {" "}
            <strong>Programme:</strong>
          </h5>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            React - NodeJS - Typescript - JEST - MongoDb - MySQL - GraphQL -
            Flutter / React Native - GIT - Agile
          </p>

          <Button
            href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web-alternance"
            target="about_blank"
            style={{
              color: "whitesmoke",
              backgroundColor: "#D14F09",
              border: " solid black 1px",
            }}
          >
            En savoir plus
          </Button>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="23 Fev 22 – 05 Mai 22"
          dateInnerStyle={{
            backgroundImage:
              "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
            color: "#D14F09",
            fontFamily: "Coda",
          }}
          style={{ color: "#71BC68" }}
          bodyContainerStyle={{
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",
            padding: "20px",
            border: "solid #54b3d6 2px",
            borderRadius: "30px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            fontFamily: "Coda",
            color: "whitesmoke",
          }}
        >
          <Badge pill bg="success" className="mb-2">
            {" "}
            VALIDÉE{" "}
          </Badge>
          <h3
            style={{
              color: "white",
              textShadow: "3px 2px 3px rgba(255,255,255,.2)",
            }}
          >
            <strong>Spécialisation Javascript | React</strong>
          </h3>
          <br></br>
          <h5>@WILD CODE SCHOOL - Niveau 6</h5>
          <br></br>
          <h5>- Réalisée et validée en distanciel - </h5>
          <hr></hr>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            Le programme de notre formation Spécialisation Javascript | React
            est très intensif et repose avant tout sur la pratique !
            L'apprentissage se base sur le développement de sites internet
            interactifs qui utilisent les technologies HTML, CSS et JavaScript.
            Ainsi, grâce à l’expertise de nos formateurs dédiés et à notre
            pédagogie hybride basée sur une plateforme pédagogique en ligne et
            la réalisation de plusieurs projets professionnels, vous allez
            rapidement acquérir les bases du développement web et la maîtrise
            des langages informatiques et frameworks suivants : React et NodeJS.
            À la fin de votre formation, vous aurez réalisé plusieurs projets
            professionnalisants (projets partenaires, hackathons, quêtes etc…)
            qui alimenteront le portfolio que vous présenterez à de potentiels
            recruteurs.
          </p>
          <h5 style={{ color: "whitesmoke" }}>
            <strong> 3 mois pour devenir développeur Front-end React:</strong>
          </h5>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            Tout au long de la formation développeur web, vous découvrez de
            nouveaux concepts sur notre plateforme pédagogique Odyssey,
            développez vos compétences grâce à l’accompagnement renforcé de nos
            formateurs, et les mettez en pratique via la réalisation des projets
            professionnels. Vous développez également votre capacité d’
            ”apprendre à apprendre” et effectuez de la veille régulière en
            autodidacte sur les nouvelles technologies demandées par le marché
            du travail.
          </p>
          <h5 style={{ color: "whitesmoke" }}>
            {" "}
            <strong>Programme:</strong>
          </h5>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            Javascript - React - React Native - GIT - Agile & Scrum
          </p>{" "}
          <Button
            href="https://www.wildcodeschool.com/fr-FR/formations/formation-developpeur-web"
            target="about_blank"
            style={{
              color: "whitesmoke",
              backgroundColor: "#D14F09",
              border: " solid black 1px",
            }}
          >
            En savoir plus
          </Button>
        </TimelineItem>

        <TimelineItem
          key="003"
          dateText="27 Sept 21 – 18 Dec 21"
          dateInnerStyle={{
            backgroundImage:
              "linear-gradient(to bottom, #1e1d22, #1f1f23, #202024, #222224, #232325",
            color: "#D14F09",
            fontFamily: "Coda",
          }}
          style={{ color: "#71BC68" }}
          bodyContainerStyle={{
            backgroundImage:
              "linear-gradient(to bottom, #171615, #191817, #1b1a19, #1d1c1b, #1f1e1d",
            padding: "20px",
            border: "solid #54b3d6 2px",
            borderRadius: "30px",
            boxShadow: "0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)",
            fontFamily: "Coda",
            color: "whitesmoke",
          }}
        >
          <Badge pill bg="success" className="mb-2">
            {" "}
            VALIDÉE{" "}
          </Badge>
          <h3
            style={{
              color: "white",
              textShadow: "3px 2px 3px rgba(255,255,255,.2)",
            }}
          >
            <strong>Développeur Full Stack Web</strong>
          </h3>
          <br></br>
          <h5>@THE HACKING PROJECT - Niveau 5</h5>
          <br></br>
          <h5>- Réalisée et validée en distanciel - </h5>
          <hr></hr>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            Vous verrez comment créer un site avec une base de données avec Ruby
            On Rails, un framework web réputé mondialement pour sa simplicité de
            mise en place. Nous vous montrerons les enjeux des bases de données
            relationnelles avec SQL, puis vous verrez comment créer des sites
            web complexes avec gestion d'utilisateurs, d'admninistrateurs, et
            même de fichiers ! On vous montrera les notions avancées comme par
            exemple l'insertion d'un module de paiement sur votre site web.
          </p>
          <h5 style={{ color: "whitesmoke" }}>
            {" "}
            <strong>
              12 semaines pour devenir développeur Full Stack Ruby:
            </strong>
          </h5>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            Et voilà ! Après des semaines de galère, vous constituerez de
            nouvelles équipes afin de réaliser des projets complexes grâce aux
            techniques modernes de gestion de projet. Ces trois semaines vous
            demanderont de réaliser deux projets : une boutique en ligne
            fonctionnelle, ainsi que le projet de votre choix. Ces trois
            dernières semaines vous serviront de clôture de la formation et vous
            feront manier autant du code que la gestion du projets en équipe.
          </p>
          <h5 style={{ color: "whitesmoke" }}>
            {" "}
            <strong>Programme:</strong>
          </h5>
          <br></br>
          <p style={{ color: "whitesmoke" }}>
            HTML - CSS - Javascript - Ajax - Ruby - RubyOnRails - Postgresql -
            GIT - Agile & Scrum
          </p>{" "}
          <Button
            href="https://www.thehackingproject.org/parcours/developpeur-web-fullstack"
            target="about_blank"
            style={{
              color: "whitesmoke",
              backgroundColor: "#D14F09",
              border: " solid black 1px",
            }}
          >
            En savoir plus
          </Button>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Training;
