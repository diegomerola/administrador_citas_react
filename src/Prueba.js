// Citas en local storage
let citasIniciales = JSON.parse(localStorage.getItem("citas"));

// Arreglo de citas
const [citas, guardarCitas] = useState(citasIniciales ? citasIniciales : []);

// Use Effect para realizar ciertas operaciones
// cuando el state cambia
useEffect(() => {
  localStorage.setItem("citas", JSON.stringify(citas));
}, [citas]);
