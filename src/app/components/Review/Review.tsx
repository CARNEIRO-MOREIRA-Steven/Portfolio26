"use client"
import { useEffect, useState } from "react";
import './review.css'

type Review = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
};

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    // Avis traduits en français
    const translatedReviews: Review[] = [
      {
        author_name: "Dona",
        rating: 5,
        text: "Steven est une personne très sympathique. Très professionnel, je le recommande vivement. Merci d'avoir créé mon site !",
        time: 0
      },
      {
        author_name: "Greenz Ink Tattoo",
        rating: 5,
        text: "CodeMeta Solutions a créé mon site et je suis très satisfait du résultat. Il est professionnel, attentif et a parfaitement répondu à mes attentes. Partagez vos idées et préférences avec lui, et il créera un site qui reflète votre vision. Je le recommande sans hésitation.",
        time: 0
      },
      {
        author_name: "Durand Alexis",
        rating: 5,
        text: "Merci à M. Carneiro pour la création complète de notre site. Il est très attentif et facile à joindre, ce qui est un vrai plus quand on n'est pas dans le domaine et qu'on hésite. Excellent rapport qualité/prix avec un résultat final top.",
        time: 0
      },
      {
        author_name: "Séverine CARNEIRO MOREIRA",
        rating: 5,
        text: "Un grand merci à CodeMeta Solutions pour cette superbe collaboration et la réalisation du projet Neuf Mois Demain ! Beaucoup de travail, beaucoup de sérieux et une grande écoute des besoins des clients, nous recommandons CodeMeta Solutions à 200% !!!",
        time: 0
      },
      {
        author_name: "Christelle SILVA",
        rating: 5,
        text: "Une refonte complète de mon site. Merci pour son professionnalisme. Il écoute attentivement, est très patient et sait trouver des solutions à vos demandes. Je recommande sans hésitation.",
        time: 0
      }
    ];

    setReviews(translatedReviews);
  }, []);

  return (
    <div className="reviews-container">
      <h2>Témoignages de <span>clients satisfaits</span></h2>
      <div className="reviews-grid">
        {reviews.map((r, idx) => (
          <div key={idx} className="review-card">
            <p>{r.text}</p>
            <div className="review-header">
              <strong>{r.author_name}</strong>
              <span>{'⭐'.repeat(r.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
