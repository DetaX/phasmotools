export const config = [
    {
        "name": "Joueur",
        "parameters": [
            {
                "name": "Santé mentale initiale <span class='small'>(%)</span>",
                "id": "sante_mentale_init",
                "options": [
                    {
                        "name": "0",
                        "value": "up"
                    },
                    {
                        "name": "25",
                        "value": "up"
                    },
                    {
                        "name": "50",
                        "value": "up"
                    },
                    {
                        "name": "75",
                        "value": "up"
                    },
                    {
                        "name": "100",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Santé mentale par pillule <span class='small'>(%)</span>",
                "id": "sante_mentale_pill",
                "options": [
                    {
                        "name": "0",
                        "value": "up"
                    },
                    {
                        "name": "5",
                        "value": "up"
                    },
                    {
                        "name": "10",
                        "value": "up"
                    },
                    {
                        "name": "20",
                        "value": "up"
                    },
                    {
                        "name": "25",
                        "value": "up"
                    },
                    {
                        "name": "30",
                        "value": "up"
                    },
                    {
                        "name": "35",
                        "value": "up"
                    },
                    {
                        "name": "40",
                        "value": "default"
                    },
                    {
                        "name": "45",
                        "value": "down"
                    },
                    {
                        "name": "50",
                        "value": "down"
                    },
                    {
                        "name": "75",
                        "value": "down"
                    },
                    {
                        "name": "100",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Multiplicateur de perte de santé mentale",
                "id": "sante_mentale_mult",
                "options": [
                    {
                        "name": "0",
                        "value": "down"
                    },
                    {
                        "name": "0.5",
                        "value": "down"
                    },
                    {
                        "name": "1",
                        "value": "default"
                    },
                    {
                        "name": "1.5",
                        "value": "up"
                    },
                    {
                        "name": "2",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Sprint",
                "id": "sprint",
                "options": [
                    {
                        "name": "Off",
                        "value": "up"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Durée du sprint <span class='small'>(s)</span>",
                "id": "sprint_duree",
                "options": [
                    {
                        "name": "1",
                        "value": "up"
                    },
                    {
                        "name": "2",
                        "value": "up"
                    },
                    {
                        "name": "3",
                        "value": "default"
                    },
                    {
                        "name": "4",
                        "value": "down"
                    },
                    {
                        "name": "5",
                        "value": "down"
                    },
                    {
                        "name": "Illimitée",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Temps de récupération du sprint <span class='small'>(s)</span>",
                "id": "temps_recup_sprint",
                "options": [
                    {
                        "name": "1",
                        "value": "down"
                    },
                    {
                        "name": "2",
                        "value": "down"
                    },
                    {
                        "name": "3",
                        "value": "down"
                    },
                    {
                        "name": "4",
                        "value": "down"
                    },
                    {
                        "name": "5",
                        "value": "default"
                    },
                    {
                        "name": "6",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Vitesse du joueur <span class='small'>(%)</span>",
                "id": "vitesse_joueur",
                "options": [
                    {
                        "name": "50",
                        "value": "up"
                    },
                    {
                        "name": "75",
                        "value": "up"
                    },
                    {
                        "name": "100",
                        "value": "default"
                    },
                    {
                        "name": "125",
                        "value": "down"
                    },
                    {
                        "name": "150",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Lampes de poches",
                "id": "lampes",
                "options": [
                    {
                        "name": "Off",
                        "value": "up"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Perte des objets au décès",
                "id": "perte_objets",
                "options": [
                    {
                        "name": "Off",
                        "value": "danger"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            }
        ]
    },
    {
        "name": "Entité",
        "parameters": [
            {
                "name": "Vitesse de déplacement <span class='small'>(%)</span>",
                "id": "vitesse_entite",
                "options": [
                    {
                        "name": "50",
                        "value": "down"
                    },
                    {
                        "name": "75",
                        "value": "down"
                    },
                    {
                        "name": "100",
                        "value": "default"
                    },
                    {
                        "name": "125",
                        "value": "up"
                    },
                    {
                        "name": "150",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Fréquence de déplacement",
                "id": "freq_deplac_entite",
                "options": [
                    {
                        "name": "Faible",
                        "value": "down"
                    },
                    {
                        "name": "Moyenne",
                        "value": "default"
                    },
                    {
                        "name": "Élevée",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Changement de pièce préférée",
                "id": "chgt_piece",
                "options": [
                    {
                        "name": "Nulle",
                        "value": "default"
                    },
                    {
                        "name": "Faible",
                        "value": "up"
                    },
                    {
                        "name": "Moyennne",
                        "value": "up"
                    },
                    {
                        "name": "Élevée",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Nombre d'interactions",
                "id": "nombre_interactions",
                "options": [
                    {
                        "name": "Faible",
                        "value": "up"
                    },
                    {
                        "name": "Moyennne",
                        "value": "up"
                    },
                    {
                        "name": "Élevée",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Fréquence des événements",
                "id": "freq_event",
                "options": [
                    {
                        "name": "Faible",
                        "value": "default"
                    },
                    {
                        "name": "Moyennne",
                        "value": "down"
                    },
                    {
                        "name": "Élevée",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Entité amicale",
                "id": "entite_friendly",
                "options": [
                    {
                        "name": "Off",
                        "value": "default"
                    },
                    {
                        "name": "On",
                        "value": "danger"
                    }
                ],
                "selected": null
            },
            {
                "name": "Période de grâce <span class='small'>(s)</span>",
                "id": "periode_grace",
                "options": [
                    {
                        "name": "0",
                        "value": "up"
                    },
                    {
                        "name": "1",
                        "value": "up"
                    },
                    {
                        "name": "2",
                        "value": "up"
                    },
                    {
                        "name": "3",
                        "value": "up"
                    },
                    {
                        "name": "4",
                        "value": "up"
                    },
                    {
                        "name": "5",
                        "value": "default"
                    },
                    {
                        "name": "6",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Durée des chasses",
                "id": "duree_chasses",
                "options": [
                    {
                        "name": "Faible",
                        "value": "default"
                    },
                    {
                        "name": "Moyennne",
                        "value": "up"
                    },
                    {
                        "name": "Élevée",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Mourir augmente la durée des chasses",
                "id": "mourir_duree_chasses",
                "options": [
                    {
                        "name": "Off",
                        "value": "default"
                    },
                    {
                        "name": "Faible",
                        "value": "default"
                    },
                    {
                        "name": "Moyenne",
                        "value": "default"
                    },
                    {
                        "name": "Élevée",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Preuves apportées",
                "id": "preuves",
                "options": [
                    {
                        "name": "0",
                        "value": "up"
                    },
                    {
                        "name": "1",
                        "value": "up"
                    },
                    {
                        "name": "2",
                        "value": "up"
                    },
                    {
                        "name": "3",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Probabilité des empreintes <span class='small'>(%)</span>",
                "id": "empreintes_proba",
                "options": [
                    {
                        "name": "25",
                        "value": "up"
                    },
                    {
                        "name": "50",
                        "value": "up"
                    },
                    {
                        "name": "75",
                        "value": "up"
                    },
                    {
                        "name": "100",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Durée des empreintes <span class='small'>(s)</span>",
                "id": "empreinte_durees",
                "options": [
                    {
                        "name": "15",
                        "value": "up"
                    },
                    {
                        "name": "30",
                        "value": "up"
                    },
                    {
                        "name": "60",
                        "value": "up"
                    },
                    {
                        "name": "90",
                        "value": "up"
                    },
                    {
                        "name": "120",
                        "value": "default"
                    },
                    {
                        "name": "180",
                        "value": "down"
                    },
                    {
                        "name": "Illimitée",
                        "value": "down"
                    }
                ],
                "selected": null
            }
        ]
    },
    {
        "name": "Contrat",
        "parameters": [
            {
                "name": "Temps de préparation <span class='small'>(s)</span>",
                "id": "temps_prepa",
                "options": [
                    {
                        "name": "0",
                        "value": "up"
                    },
                    {
                        "name": "60",
                        "value": "up"
                    },
                    {
                        "name": "90",
                        "value": "up"
                    },
                    {
                        "name": "120",
                        "value": "up"
                    },
                    {
                        "name": "180",
                        "value": "up"
                    },
                    {
                        "name": "240",
                        "value": "up"
                    },
                    {
                        "name": "300",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Météo",
                "id": "meteo",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Pluie légère",
                        "value": "up"
                    },
                    {
                        "name": "Pluie forte",
                        "value": "up"
                    },
                    {
                        "name": "Neige",
                        "value": "up"
                    },
                    {
                        "name": "Vent",
                        "value": "up"
                    },
                    {
                        "name": "Temps clair",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Portes ouvertes en début de partie",
                "id": "portes_debut",
                "options": [
                    {
                        "name": "Aucune",
                        "value": "default"
                    },
                    {
                        "name": "Faible",
                        "value": "up"
                    },
                    {
                        "name": "Moyenne",
                        "value": "up"
                    },
                    {
                        "name": "Élevée",
                        "value": "up"
                    }
                ],
                "selected": null
            },
            {
                "name": "Caches",
                "id": "caches",
                "options": [
                    {
                        "name": "Aucune",
                        "value": "up"
                    },
                    {
                        "name": "Faible",
                        "value": "up"
                    },
                    {
                        "name": "Moyenne",
                        "value": "up"
                    },
                    {
                        "name": "Élevée",
                        "value": "up"
                    },
                    {
                        "name": "Trés élevée",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Moniteur de santé mentale",
                "id": "moniteur_sante",
                "options": [
                    {
                        "name": "Off",
                        "value": "up"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Moniteur d'activité",
                "id": "moniteur_emf",
                "options": [
                    {
                        "name": "Off",
                        "value": "up"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Disjoncteur au début du contrat",
                "id": "disjoncteur",
                "options": [
                    {
                        "name": "Cassé",
                        "value": "up"
                    },
                    {
                        "name": "Off",
                        "value": "up"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Disjoncteur visible sur la carte",
                "id": "disjoncteur_map",
                "options": [
                    {
                        "name": "Off",
                        "value": "up"
                    },
                    {
                        "name": "On",
                        "value": "default"
                    }
                ],
                "selected": null
            },
            {
                "name": "Quantité d'Objets Maudits",
                "id": "nb_maudits",
                "options": [
                    {
                        "name": "0",
                        "value": "up"
                    },
                    {
                        "name": "1",
                        "value": "default"
                    },
                    {
                        "name": "2",
                        "value": "down"
                    },
                    {
                        "name": "3",
                        "value": "down"
                    },
                    {
                        "name": "4",
                        "value": "down"
                    },
                    {
                        "name": "5",
                        "value": "down"
                    },
                    {
                        "name": "6",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Objet Maudit #1",
                "id": "maudit_1",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "down"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "down"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "down"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "down"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "down"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Objet Maudit #2",
                "id": "maudit_2",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "down"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "down"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "down"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "down"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "down"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Objet Maudit #3",
                "id": "maudit_3",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "down"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "down"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "down"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "down"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "down"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Objet Maudit #4",
                "id": "maudit_4",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "down"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "down"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "down"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "down"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "down"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Objet Maudit #5",
                "id": "maudit_5",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "down"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "down"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "down"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "down"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "down"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "down"
                    }
                ],
                "selected": null
            },
            {
                "name": "Objet Maudit #6",
                "id": "maudit_6",
                "options": [
                    {
                        "name": "Aléatoire",
                        "value": "default"
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "down"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "down"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "down"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "down"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "down"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "down"
                    }
                ],
                "selected": null
            }
        ]
    }
]
export const proofs = [
    {
        "name": "Écriture fantomatique",
        "id": "ecri",
        "position": 4,
        "status": 0
    },
    {
        "name": "EMF niveau 5",
        "id": "emf",
        "position": 0,
        "status": 0
    },
    {
        "name": "Empreintes digitales",
        "id": "empr",
        "position": 2,
        "status": 0
    },
    {
        "name": "Orbe phantomatique",
        "id": "orbs",
        "position": 3,
        "status": 0
    },
    {
        "name": "Projecteur D.O.T.S.",
        "id": "dots",
        "position": 1,
        "status": 0
    },
    {
        "name": "Spirit Box",
        "id": "spirit",
        "position": 5,
        "status": 0
    },
    {
        "name": "Températures glaciales",
        "id": "tempe",
        "position": 6,
        "status": 0
    }
]
export const entities = [
    {
        "name": "Banshee",
        "proofs": ["orbs", "empr", "dots"],
        "needProof": null,
        "position": 4,
        "status": 0
    },
    {
        "name": "Cauchemar",
        "proofs": ["orbs", "spirit", "ecri"],
        "needProof": null,
        "position": 6,
        "status": 0
    },
    {
        "name": "Démon",
        "proofs": ["tempe", "empr", "ecri"],
        "needProof": null,
        "position": 9,
        "status": 0
    },
    {
        "name": "Deogen",
        "proofs": ["spirit", "ecri", "dots"],
        "needProof": null,
        "position": 22,
        "status": 0
    },
    {
        "name": "Djinn",
        "proofs": ["emf", "tempe", "empr"],
        "needProof": null,
        "position": 5,
        "status": 0
    },
    {
        "name": "Esprit",
        "proofs": ["emf", "spirit", "ecri"],
        "needProof": null,
        "position": 0,
        "status": 0
    },
    {
        "name": "Fantôme",
        "proofs": ["spirit", "empr", "dots"],
        "needProof": null,
        "position": 2,
        "status": 0
    },
    {
        "name": "Goryo",
        "proofs": ["emf", "empr", "dots"],
        "needProof": null,
        "position": 14,
        "status": 0
    },
    {
        "name": "Hantu",
        "proofs": ["orbs", "tempe", "empr"],
        "needProof": null,
        "position": 13,
        "status": 0
    },
    {
        "name": "Le Mimic",
        "proofs": ["spirit", "tempe", "empr"],
        "needProof": null,
        "position": 20,
        "status": 0
    },
    {
        "name": "Les Jumeaux",
        "proofs": ["emf", "spirit", "tempe"],
        "needProof": null,
        "position": 17,
        "status": 0
    },
    {
        "name": "Moroï",
        "proofs": ["spirit", "tempe", "ecri"],
        "needProof": null,
        "position": 21,
        "status": 0
    },
    {
        "name": "Myling",
        "proofs": ["emf", "empr", "ecri"],
        "needProof": null,
        "position": 15,
        "status": 0
    },
    {
        "name": "Obake",
        "proofs": ["emf", "orbs", "empr"],
        "needProof": null,
        "position": 19,
        "status": 0
    },
    {
        "name": "Ombre",
        "proofs": ["emf", "tempe", "ecri"],
        "needProof": null,
        "position": 8,
        "status": 0
    },
    {
        "name": "Oni",
        "proofs": ["emf", "tempe", "dots"],
        "needProof": null,
        "position": 11,
        "status": 0
    },
    {
        "name": "Onryo",
        "proofs": ["orbs", "spirit", "tempe"],
        "needProof": null,
        "position": 16,
        "status": 0
    },
    {
        "name": "Poltergeist",
        "proofs": ["spirit", "empr", "ecri"],
        "needProof": null,
        "position": 3,
        "status": 0
    },
    {
        "name": "Raiju",
        "proofs": ["emf", "orbs", "dots"],
        "needProof": null,
        "position": 18,
        "status": 0
    },
    {
        "name": "Revenant",
        "proofs": ["orbs", "tempe", "ecri"],
        "needProof": null,
        "position": 7,
        "status": 0
    },
    {
        "name": "Spectre",
        "proofs": ["emf", "spirit", "dots"],
        "needProof": null,
        "position": 1,
        "status": 0
    },
    {
        "name": "Thayé",
        "proofs": ["orbs", "ecri", "dots"],
        "needProof": null,
        "position": 23,
        "status": 0
    },
    {
        "name": "Yokai",
        "proofs": ["orbs", "spirit", "dots"],
        "needProof": null,
        "position": 12,
        "status": 0
    },
    {
        "name": "Yurei",
        "proofs": ["orbs", "tempe", "dots"],
        "needProof": null,
        "position": 10,
        "status": 0
    },
]
