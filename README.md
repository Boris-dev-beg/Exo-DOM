# Exo DOM
1. Le **scope (portée)** est la Zone dans laquelle une variable est accessible. Ils sont:
	* Le *scope Global* : Portée par défaut
	* Le *scope Local* (module, fonction, Bloc: par une paire d'accolades"): Les variables declarée a l'interieures ne sont accessible que la-bas.
2. Une **fonction** un ensemble d'instructions effectuant une tâche.
	- Les fonctions normales: peuvent etre appeler avant leurs declarations, exemple: `function MaFonction(){}`
	- Les fonction anonymes: Ne peuvent pas etre appeler avant leurs declarations, exemple:`const MaFonction = function (){}`
	- Les fonctions flechees: Ne peuvent pas etre appeler avant leurs declarations, exemple: `MaFonction => {}`, permet d'utiliser une syntaxe plus concise que les expressions de fonctions classiques.
	- Les fonctions Construction: Appeler avec le mot cles *new* et permettent d'utiliser le mot clé *this* dans leurs declarations.