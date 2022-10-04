const controller = {
	index: (req, res) => {
		return res.render('index');
	},
	about: (req, res) => {
		return res.render('about');
	},
	home: (req, res) => {
		return res.render('home');
	}
};

module.exports = controller;
