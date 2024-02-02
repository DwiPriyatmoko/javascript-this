// 1. Object literal
/* let mahasiswa = {
	nama: 'Origin',
	energy: 10,
	makan: function (porsi) {
		this.energy = this.energy + porsi;
		console.log(`Halo, ${this.nama}, selamat makan`);
	},
};

let mahasiswa = {
	nama: 'Origin',
	energy: 10,
	makan: function (porsi) {
		this.energy = this.energy + porsi;
		console.log(`Halo, ${this.nama}, selamat makan`);
	},
};
*/

/*
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	let mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa(
	'nova',
	'37367271',
	'nova@gmail.com',
	'Ilmu komputer'
);

console.log(mhs3);
 */

// Constructor
/* 
function Mahasiswa(nama, nrp, email, jurusan) {
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
}

let mhs = new Mahasiswa('nova', '37367271', 'nova@gmail.com', 'Ilmu komputer');
 */

// Function Declaration
/* function halo() {
	console.log('Halo JavaScript');
}

halo(); */

// Object literal
/* let obj = {};
obj.halo = function () {
	console.log('Halo JavaScript');
};

obj.halo(); */

// Constructor
/*  function Halo() {
	console.log('Halo JavaScript');
}

new Halo(); */

// THIS (a special keyword in JavaScript which allows us to access properties and methods of the current object)

// this - function declaration
// console.log(this);

/* function halo() {
	console.log(this);
	console.log('halo');
}

this.halo(); */
// this mengembalikan object Global

// this - object literal
/* let obj = {name: 'origin', age: 35, layout: 65};
obj.halo = function() {
	console.log(this);
	console.log('halo');
}

obj.halo(); // this.object literal = mengembalikan object yang bersangkutan */

// this - Constructor
function Halo() {
	console.log(this);
	// console.log('halo');
}

let obj1 = new Halo();
let obj2 = new Halo();
// this.Constructor = mengembalikan object yang baru dibuat
