const data = [
    {
        "name": "Joueur",
        "parameters": [
            {
                "name": "Santé mentale initiale <span class='small'>(%)</span>",
                "id": "sante_mentale_init",
                "options": [
                    {
                        "name": "0",
                        "value": "+"
                    },
                    {
                        "name": "25",
                        "value": "+"
                    },
                    {
                        "name": "50",
                        "value": "+"
                    },
                    {
                        "name": "75",
                        "value": "+"
                    },
                    {
                        "name": "100",
                        "value": 0
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
                        "value": "+"
                    },
                    {
                        "name": "5",
                        "value": "+"
                    },
                    {
                        "name": "10",
                        "value": "+"
                    },
                    {
                        "name": "20",
                        "value": "+"
                    },
                    {
                        "name": "25",
                        "value": "+"
                    },
                    {
                        "name": "30",
                        "value": "+"
                    },
                    {
                        "name": "35",
                        "value": "+"
                    },
                    {
                        "name": "40",
                        "value": 0
                    },
                    {
                        "name": "45",
                        "value": "-"
                    },
                    {
                        "name": "50",
                        "value": "-"
                    },
                    {
                        "name": "75",
                        "value": "-"
                    },
                    {
                        "name": "100",
                        "value": "-"
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
                        "value": "-"
                    },
                    {
                        "name": "0.5",
                        "value": "-"
                    },
                    {
                        "name": "1",
                        "value": 1.5
                    },
                    {
                        "name": "1.5",
                        "value": "+"
                    },
                    {
                        "name": "2",
                        "value": "+"
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
                        "value": "+"
                    },
                    {
                        "name": "On",
                        "value": 1
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
                        "value": "+"
                    },
                    {
                        "name": "2",
                        "value": "+"
                    },
                    {
                        "name": "3",
                        "value": 1
                    },
                    {
                        "name": "4",
                        "value": "-"
                    },
                    {
                        "name": "5",
                        "value": "-"
                    },
                    {
                        "name": "Illimitée",
                        "value": "-"
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
                        "value": "-"
                    },
                    {
                        "name": "2",
                        "value": "-"
                    },
                    {
                        "name": "3",
                        "value": "-"
                    },
                    {
                        "name": "4",
                        "value": "-"
                    },
                    {
                        "name": "5",
                        "value": 1
                    },
                    {
                        "name": "6",
                        "value": "+"
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
                        "value": "+"
                    },
                    {
                        "name": "75",
                        "value": "+"
                    },
                    {
                        "name": "100",
                        "value": 1
                    },
                    {
                        "name": "125",
                        "value": "-"
                    },
                    {
                        "name": "150",
                        "value": "-"
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
                        "value": "+"
                    },
                    {
                        "name": "On",
                        "value": 1
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
                        "value": "*"
                    },
                    {
                        "name": "On",
                        "value": 1
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
                        "value": "-"
                    },
                    {
                        "name": "75",
                        "value": "-"
                    },
                    {
                        "name": "100",
                        "value": 1.5
                    },
                    {
                        "name": "125",
                        "value": "+"
                    },
                    {
                        "name": "150",
                        "value": "+"
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
                        "value": "-"
                    },
                    {
                        "name": "Moyenne",
                        "value": 1
                    },
                    {
                        "name": "Élevée",
                        "value": "+"
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
                        "value": 0
                    },
                    {
                        "name": "Faible",
                        "value": "+"
                    },
                    {
                        "name": "Moyennne",
                        "value": "+"
                    },
                    {
                        "name": "Élevée",
                        "value": "+"
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
                        "value": "+"
                    },
                    {
                        "name": "Moyennne",
                        "value": "+"
                    },
                    {
                        "name": "Élevée",
                        "value": 1.5
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
                        "value": 1
                    },
                    {
                        "name": "Moyennne",
                        "value": "-"
                    },
                    {
                        "name": "Élevée",
                        "value": "-"
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
                        "value": 0
                    },
                    {
                        "name": "On",
                        "value": "*"
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
                        "value": "+"
                    },
                    {
                        "name": "1",
                        "value": "+"
                    },
                    {
                        "name": "2",
                        "value": "+"
                    },
                    {
                        "name": "3",
                        "value": "+"
                    },
                    {
                        "name": "4",
                        "value": "+"
                    },
                    {
                        "name": "5",
                        "value": 1.5
                    },
                    {
                        "name": "6",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Moyennne",
                        "value": "+"
                    },
                    {
                        "name": "Élevée",
                        "value": "+"
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
                        "value": 1
                    },
                    {
                        "name": "Faible",
                        "value": 1.5
                    },
                    {
                        "name": "Moyenne",
                        "value": 1.5
                    },
                    {
                        "name": "Élevée",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "1",
                        "value": "+"
                    },
                    {
                        "name": "2",
                        "value": "+"
                    },
                    {
                        "name": "3",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "50",
                        "value": "+"
                    },
                    {
                        "name": "75",
                        "value": "+"
                    },
                    {
                        "name": "100",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "30",
                        "value": "+"
                    },
                    {
                        "name": "60",
                        "value": "+"
                    },
                    {
                        "name": "90",
                        "value": "+"
                    },
                    {
                        "name": "120",
                        "value": 1.5
                    },
                    {
                        "name": "180",
                        "value": "-"
                    },
                    {
                        "name": "Illimitée",
                        "value": "-"
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
                        "value": "+"
                    },
                    {
                        "name": "60",
                        "value": "+"
                    },
                    {
                        "name": "60",
                        "value": "+"
                    },
                    {
                        "name": "120",
                        "value": "+"
                    },
                    {
                        "name": "180",
                        "value": "+"
                    },
                    {
                        "name": "240",
                        "value": "+"
                    },
                    {
                        "name": "300",
                        "value": 2.5
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
                        "value": 0
                    },
                    {
                        "name": "Pluie légère",
                        "value": "+"
                    },
                    {
                        "name": "Pluie forte",
                        "value": "+"
                    },
                    {
                        "name": "Neige",
                        "value": "+"
                    },
                    {
                        "name": "Vent",
                        "value": "+"
                    },
                    {
                        "name": "Temps clair",
                        "value": "-"
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
                        "value": 0
                    },
                    {
                        "name": "Faible",
                        "value": "+"
                    },
                    {
                        "name": "Moyenne",
                        "value": "+"
                    },
                    {
                        "name": "Élevée",
                        "value": "+"
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
                        "value": "+"
                    },
                    {
                        "name": "Faible",
                        "value": "+"
                    },
                    {
                        "name": "Moyenne",
                        "value": "+"
                    },
                    {
                        "name": "Élevée",
                        "value": "+"
                    },
                    {
                        "name": "Trés élevée",
                        "value": 2
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
                        "value": "+"
                    },
                    {
                        "name": "On",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "On",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "Off",
                        "value": "+"
                    },
                    {
                        "name": "On",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "On",
                        "value": 1.5
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
                        "value": "+"
                    },
                    {
                        "name": "1",
                        "value": 1
                    },
                    {
                        "name": "2",
                        "value": "-"
                    },
                    {
                        "name": "3",
                        "value": "-"
                    },
                    {
                        "name": "4",
                        "value": "-"
                    },
                    {
                        "name": "5",
                        "value": "-"
                    },
                    {
                        "name": "6",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "-"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "-"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "-"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "-"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "-"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "-"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "-"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "-"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "-"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "-"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "-"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "-"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "-"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "-"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "-"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "-"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "-"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "-"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "-"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "-"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "-"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "-"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "-"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "-"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "-"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "-"
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
                        "value": 1
                    },
                    {
                        "name": "Cartes de tarot",
                        "value": "-"
                    },
                    {
                        "name": "Planche Ouija",
                        "value": "-"
                    },
                    {
                        "name": "Miroir hanté",
                        "value": "-"
                    },
                    {
                        "name": "Boîte à musique",
                        "value": "-"
                    },
                    {
                        "name": "Cercle d'invocation",
                        "value": "-"
                    },
                    {
                        "name": "Poupée vaudou",
                        "value": "-"
                    }
                ],
                "selected": null
            }
        ]
    }
]
export default data;