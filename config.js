/**
 * Модуль содержит ключи интеграции и другие конфигурации
 */
const config = {
	// данные для api amocrm
	CLIENT_ID: "d8d01897-a48c-4146-bcfe-729b6a803969",
	CLIENT_SECRET: "fSo9aIFu04SnLPuNN4zFf3X4uRrUI4A5dYUkQZjyajSEJwCvmnt6CLncuIXxLOIx",
	//AUTH_CODE живет 20 минут, при перезапуске скрипта нужно брать новый
	AUTH_CODE: "def502000b55bbdf92aea406ff6d1bcf2e537b191b65ac897d1e6374af5d8a993512e34a460ebbdb363370bb1e219a4a87d83deece619f78ac2579c030c537689dc25087086a5ec8cc75998de873f7834c32812b43ddf0efa8fb372fb4758c97e02c49474f4a8ffbc5bd18592519b682f84cbadaf125f88e0aeed973c69ecb3f5485463fd2ddd01d151159c1a011bea93de87c2c9ee58ced733bb9f4e18c3049bcb3a5d4c6442f6e69fdbd151ee50c26fb29b31bac772a7d5bb5fe45ded033a9e5b0344648240b9d9509a3b8904d37a8834ea4c41f1e26e6c01d562682e9b7c5eaa8b2cf72c703db4a50105c4c54ba25653a0d864b9ddadf5dece6756c995f769ea6f32d03679f7b1db68ea2fd3d862beca8acb1532bdab769e4fa3ec17c63b6a856242a1421c4f23e4d05258789ee67c73b54d84ca9cdab38eb8693490fdd3b587606fc296aa93ea7829231a151b2b9b18a7bdf4ae6ae5cd857e1c26a48d749a6b4f7e4e964044f54edf521498ea74623d2f73a72c9754b91631a9bdf8d55176276e1801bb9d75e5688441a55c0f3a82de3c74b3fe95fb1e4f1cde9a03cca654e9cb1ea08a16563b00dcd1bbaafb080ed409baec9af8e596e860e405ed7680feed9030701d50aee4ad3066c0590816d29e78ba77b1dd48644ecc7bec7cb006abdb062ed459435983054a7936b3017cded302738a792115ff223a4bcbbcbb6f1955739f118",
	REDIRECT_URI: "https://1e0f-77-95-90-50.ngrok-free.app/add-contact",
	SUB_DOMAIN: "nstorchakreon",
	// конфигурация сервера
	PORT: 5000,
}; 

module.exports = config;
