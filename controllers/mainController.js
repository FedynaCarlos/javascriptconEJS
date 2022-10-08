const controller = {
	index: (req, res) => {
		return res.render('index');
	},
	about: (req, res) => {
		return res.render('about');
	},
	home: (req, res) => {
		return res.render('home');
	},
	list: function(req, res) {
		//en este lugar puedo iterar o ir a buscar datos a algun ladola clave esta en
		//usar el mismo nombre, que el segundo parametro del render
		//let "users" y el segundo parametro del render seria igual {"users": users}
		let users = [ 'Dario', 'Carlos', 'Juan', 'Paco', 'Ale' ];
		res.render('userList', { users: users });
		//-------------------------!users:  ese nombre debe coincidir con el que usaremos en la vista)
	},

	comida: (req, res) => {
		return res.render('indexx');
	},
	casa: (req, res) => {
		let users1 = [
			{ id: 1, name: 'Dario' },
			{ id: 2, name: 'Juan' },
			{ id: 3, name: 'Carlos' },
			{ id: 4, name: 'Maru' },
			{ id: 5, name: 'Ale' }
		];
		res.render('userList1', { users1: users1 });
	}
};

module.exports = controller;
