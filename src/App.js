import logo from './logo.svg';
import cartechlogo from './cartechlogo.png';
import './App.css';
import './header/Navbar.css';
import './footer/Footer.css';
import LoginForm from './login/LoginForm';
import SignupForm from './signup/SignupForm';
import SellCarForm from './buy&sell form/SellCarForm';
import BuyCarForm from './buy&sell form/BuyCarForm';
import BidForm from './buy&sell form/BidForm';
import React, { useMemo, useState, useEffect } from "react";
import CityDropdown from './CityDropdown';
import Header from './header/Navbar';
import Footer from './footer/Footer';
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Heart,
  Search,
  Filter,
  MapPin,
  Fuel,
  Gauge,
  Settings2,
  Star,
  Plus,
  X,
  Phone,
  Mail,
  Calendar,
  Share2,
  User,
} from "lucide-react";

// ---- Mock Data -------------------------------------------------------------
const MOCK_CARS = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    price: 980000,
    mileage: 24000,
    fuel: "Petrol",
    transmission: "Automatic",
    location: "Pune, MH",
    condition: "Used",
    featured: true,
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.hXLbfFtKgnoRnAYIRQCIaQHaFj?w=1024&h=768&rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    description:
      "Well-maintained single-owner Corolla with service history. Great mileage and smooth automatic gearbox.",
    seller: {
      name: "Aarav Kulkarni",
      phone: "+91 98765 43210",
      email: "aarav@example.com",
    },
    postedAt: "2025-08-10",
  },
  {
    id: 2,
    make: "Hyundai",
    model: "Venue",
    year: 2023,
    price: 1320000,
    mileage: 12000,
    fuel: "Diesel",
    transmission: "Manual",
    location: "Mumbai, MH",
    condition: "Used",
    featured: false,
    images: [
      "https://tse1.mm.bing.net/th/id/OIP.GSLzYonocOcVFx5vJilGJAHaD9?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    description:
      "Compact SUV with great ground clearance and infotainment features. Still under warranty.",
    seller: {
      name: "Neha Shah",
      phone: "+91 99880 11223",
      email: "neha@example.com",
    },
    postedAt: "2025-07-28",
  },
  {
    id: 3,
    make: "Tata",
    model: "Nexon EV",
    year: 2024,
    price: 1680000,
    mileage: 8000,
    fuel: "Electric",
    transmission: "Automatic",
    location: "Bengaluru, KA",
    condition: "Used",
    featured: true,
    images: [
      "https://newsimg.giznext.com/mobile/production/news/wp-content/uploads/2023/12/14121210/Tata-Nexon-EV-facelift.png",
    ],
    description:
      "Zippy EV with excellent range for city commutes. Fast-charging compatible and ADAS features.",
    seller: {
      name: "Rahul Nair",
      phone: "+91 98111 22334",
      email: "rahul@example.com",
    },
    postedAt: "2025-08-18",
  },
  {
    id: 4,
    make: "Maruti",
    model: "Baleno",
    year: 2019,
    price: 650000,
    mileage: 52000,
    fuel: "Petrol",
    transmission: "Manual",
    location: "Delhi, DL",
    condition: "Used",
    featured: false,
    images: [
      "https://tse3.mm.bing.net/th/id/OIP.bzSUFZDyIEcCHKFLH3dvsgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    ],
    description:
      "Reliable hatchback with spacious cabin. Recently serviciced, new tires.",
    seller: {
      name: "Ishita Verma",
      phone: "+91 99220 99887",
      email: "ishita@example.com",
    },
    postedAt: "2025-06-30",
  },
  {
    id: 6,
    make: "Honda",
    model: "City",
    year: 2022,
    price: 1450000,
    mileage: 18000,
    fuel: "Petrol",
    transmission: "CVT",
    location: "Ahmedabad, GJ",
    condition: "Used",
    featured: false,
    images: [
      "https://img.pcauto.com/model/images/touPic/my/Honda-City_16.png",
    ],
    description:
      "Premium sedan, sunroof, cruise control, and connected car features. Single owner.",
    seller: {
      name: "Karan Patel",
      phone: "+91 90009 00090",
      email: "karan@example.com",
    },
    postedAt: "2025-08-05",
  },
  {
    id: 7,
    make: "Mahindra",
    model: "Xuv 700",
    year: 2022,
    price: 1950000,
    mileage: 28000,
    fuel: "Diesel",
    transmission: "Manual",
    location: "Pune, MH",
    condition: "Used",
    featured: false,
    images: [
      "https://www.dadamotors.com/all/superadmin/carimage1/mahindra-xuv-700-1.webp",
    ],
    description:
      "Sporty SUV, sunroof, cruise control, and connected car features. Single owner.",
    seller: {
      name: "Suresh Sharma",
      phone: "+91 90009 00090",
      email: "karan@example.com",
    },
    postedAt: "2025-08-20",
  },
];

const MAKES = ["Any", "Toyota", "Hyundai", "Tata", "Maruti", "Honda", "Mahindra"];
const FUELS = ["Any", "Petrol", "Diesel","CNG", "Electric"];
const TRANSMISSIONS = ["Any", "Manual", "Automatic", "CVT"];

// ---- Helpers ---------------------------------------------------------------
const formatINR = (n) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
function classNames(...c) {
  return c.filter(Boolean).join(" ");
}

// ---- Components ------------------------------------------------------------
function Hero({ query, setQuery }) {
  return (
    <section className="hero-section">
      <div className="container-responsive hero-grid">
        <div>
          <h1 className="hero-title">Buy & Sell Cars with Confidence</h1>
          <p className="hero-description">Browse verified listings, filter exactly what you want, and connect directly with sellers.</p>
          <div className="hero-search-container">
            <div className="hero-search-input">
              <Search className="hero-search-icon"/>
              <input 
                value={query} 
                onChange={(e)=>setQuery(e.target.value)} 
                placeholder="Search make, model, or location" 
                className="filter-input"
              />
            </div>
            <button className="header-button header-button-secondary">
              <Filter className="w-4 h-4"/>Advanced
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <Calendar className="w-4 h-4"/> Updated daily • Safe, direct messaging • No hidden fees
          </div>
        </div>
        <motion.div 
          initial={{opacity:0, y:10}} 
          animate={{opacity:1, y:0}} 
          className="aspect-video rounded-3xl bg-slate-100 shadow-inner grid place-content-center mobile-hidden"
        >
          <Car className="w-32 h-32 opacity-40"/>
        </motion.div>
      </div>
    </section>
  );
}

function Filters({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  const set = (patch) => setFilters((f) => ({ ...f, ...patch }));

  return (
    <div className="filters-container">
      <div className="filters-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings2 className="w-5 h-5"/>
            <h3 className="text-lg font-semibold">Filters</h3>
          </div>
          <button onClick={() => setOpen(true)} className="header-button header-button-secondary">
            <Filter className="w-4 h-4"/>All filters
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">Refine by budget, year, fuel, and more.</p>
      </div>
      <div className="filters-grid">
        <div className="filter-group">
          <label className="filter-label">Make</label>
          <select 
            value={filters.make} 
            onChange={(e)=>set({make:e.target.value})}
            className="filter-input"
          >
            {MAKES.map((m)=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Fuel</label>
          <select 
            value={filters.fuel} 
            onChange={(e)=>set({fuel:e.target.value})}
            className="filter-input"
          >
            {FUELS.map((m)=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Transmission</label>
          <select 
            value={filters.transmission} 
            onChange={(e)=>set({transmission:e.target.value})}
            className="filter-input"
          >
            {TRANSMISSIONS.map((m)=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Min Year</label>
          <input 
            type="number" 
            value={filters.minYear} 
            onChange={(e)=>set({minYear:Number(e.target.value) || 0})} 
            placeholder="2015"
            className="filter-input"
          />
        </div>
        <div className="filter-group">
          <label className="filter-label">Max Price</label>
          <input 
            type="number" 
            value={filters.maxPrice} 
            onChange={(e)=>set({maxPrice:Number(e.target.value) || 0})} 
            placeholder="1500000"
            className="filter-input"
          />
        </div>
      </div>

      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">All Filters</h3>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">Fine-tune to find your perfect car.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="filter-group">
                  <label className="filter-label">Location contains</label>
                  <input 
                    value={filters.location}
                    onChange={(e)=>set({location:e.target.value})}
                    placeholder="e.g. Pune"
                    className="filter-input"
                  />
                </div>
                <div className="filter-group">
                  <label className="filter-label">Max Mileage (km)</label>
                  <input 
                    type="number" 
                    value={filters.maxMileage}
                    onChange={(e)=>set({maxMileage:Number(e.target.value)||0})}
                    placeholder="50000"
                    className="filter-input"
                  />
                </div>
                <div className="filter-group">
                  <label className="filter-label">Only Featured</label>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      checked={filters.featuredOnly} 
                      onChange={(e)=>set({featuredOnly: e.target.checked})}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-600">Show handpicked listings</span>
                  </div>
                </div>
              </div>
              <div className="filter-group">
                <label className="filter-label">Sort by</label>
                <select 
                  value={filters.sortBy} 
                  onChange={(e)=>set({sortBy:e.target.value})}
                  className="filter-input"
                >
                  <option value="newest">Newest</option>
                  <option value="priceAsc">Price: Low → High</option>
                  <option value="priceDesc">Price: High → Low</option>
                  <option value="mileageAsc">Mileage: Low → High</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 justify-end mt-6">
              <button onClick={()=>setFilters(defaultFilters())} className="header-button header-button-secondary">Reset</button>
              <button onClick={()=>setOpen(false)} className="header-button header-button-primary">Apply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CarCard({ car, onOpen }) {
  return (
    <motion.div layout initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="fade-in">
      <div className="car-card">
        <div className="car-image">
          <img src={car.images[0]} alt={`${car.make} ${car.model}`} />
          {car.featured && (
            <span className="featured-badge">Featured</span>
          )}
          <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100">
            <Heart className="w-4 h-4"/>
          </button>
        </div>
        <div className="car-content">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">{car.year} {car.make} {car.model}</h3>
              <p className="text-sm text-gray-600 flex items-center gap-1"><MapPin className="w-4 h-4"/>{car.location}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-semibold">{formatINR(car.price)}</div>
              <div className="text-xs text-gray-500">Posted {car.postedAt}</div>
            </div>
          </div>
        </div>
        <div className="car-specs">
          <div className="flex items-center gap-1"><Fuel className="w-4 h-4"/>{car.fuel}</div>
          <div className="flex items-center gap-1"><Gauge className="w-4 h-4"/>{car.mileage.toLocaleString()} km</div>
          <div className="flex items-center gap-1"><Settings2 className="w-4 h-4"/>{car.transmission}</div>
        </div>
        <div className="car-action">
          <button onClick={()=>onOpen(car)} className="car-action-button">View Details</button>
        </div>
      </div>
    </motion.div>
  );
}

function DetailsDialog({ openCar, setOpenCar }) {
  const car = openCar;
  return (
    <div className={`modal-overlay ${!car ? 'hidden' : ''}`}>
      {car && (
        <div className="modal-content">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{car.year} {car.make} {car.model}</h2>
              <p className="text-gray-600 mt-1">{car.location} • {car.condition}</p>
            </div>
            <button 
              onClick={()=>setOpenCar(null)} 
              className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-lg hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            {/* Image Section */}
            <div className="car-details-image-container">
              <img 
                src={car.images[0]} 
                alt={`${car.year} ${car.make} ${car.model}`} 
                className="car-details-image"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
            
            {/* Details Section */}
            <div className="space-y-4">
              <div className="text-3xl font-bold text-primary-700">{formatINR(car.price)}</div>
              
              <div className="grid grid-cols-2 gap-3">
                <Spec label="Fuel" value={car.fuel} icon={<Fuel className="w-4 h-4"/>}/>
                <Spec label="Transmission" value={car.transmission} icon={<Settings2 className="w-4 h-4"/>}/>
                <Spec label="Mileage" value={`${car.mileage.toLocaleString()} km`} icon={<Gauge className="w-4 h-4"/>}/>
                <Spec label="Posted" value={car.postedAt} icon={<Calendar className="w-4 h-4"/>}/>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{car.description}</p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="font-semibold text-blue-900 mb-2">Seller Information</h3>
                <p className="text-blue-800 text-sm">{car.seller.name}</p>
                <div className="flex items-center gap-2 mt-2 text-blue-700 text-xs">
                  <Phone className="w-3 h-3"/> {car.seller.phone}
                </div>
                <div className="flex items-center gap-2 text-blue-700 text-xs">
                  <Mail className="w-3 h-3"/> {car.seller.email}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <button className="action-button action-button-primary">
                  <Phone className="w-4 h-4"/> Call Seller
                </button>
                <button className="action-button action-button-secondary">
                  <Mail className="w-4 h-4"/> Email
                </button>
                <button className="action-button action-button-secondary">
                  <Share2 className="w-4 h-4"/> Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Spec({ label, value, icon }){
  return (
    <div className="p-3 rounded-xl bg-gray-100 border border-gray-200">
      <div className="flex items-center gap-2 mb-1">
        {icon && <span className="text-primary-600">{icon}</span>}
        <div className="text-xs uppercase tracking-wide text-gray-600 font-semibold">{label}</div>
      </div>
      <div className="font-medium text-gray-900">{value}</div>
    </div>
  );
}

function CreateListingDialog({ open, onOpenChange, onCreate }){
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    fuel: "Petrol",
    transmission: "Manual",
    location: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const set = (patch)=>setForm((f)=>({...f, ...patch}));

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const newCar = {
        id: Math.random(),
        make: form.make || "Custom",
        model: form.model || "Model",
        year: Number(form.year) || new Date().getFullYear(),
        price: Number(form.price) || 0,
        mileage: Number(form.mileage) || 0,
        fuel: form.fuel,
        transmission: form.transmission,
        location: form.location || "",
        condition: "Used",
        featured: false,
        images: [form.image || "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop"],
        description: `${form.year} ${form.make} ${form.model} listed via DriveMart.`,
        seller: { name: "You", phone: "", email: "" },
        postedAt: new Date().toISOString().slice(0,10),
      };
      onCreate(newCar);
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
  };

  return (
    <div className={`modal-overlay create-listing-modal ${!open ? 'hidden' : ''}`}>
      <div className="modal-content">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">Create Listing</h2>
            <p className="text-sm text-gray-600">Add your car details. You can edit later.</p>
          </div>
          <button onClick={() => { console.log("CreateListingDialog close button clicked"); onOpenChange(false); }} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className={`create-listing-form-grid ${isLoading ? 'loading' : ''}`}>
          <div className="filter-group">
            <label className="filter-label">Make</label>
            <input 
              value={form.make} 
              onChange={(e)=>set({make:e.target.value})} 
              placeholder="e.g. Toyota" 
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Model</label>
            <input 
              value={form.model} 
              onChange={(e)=>set({model:e.target.value})} 
              placeholder="e.g. Corolla"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Year</label>
            <input 
              type="number" 
              value={form.year} 
              onChange={(e)=>set({year:e.target.value})}
              className="filter-input"
              disabled={isLoading}
              min="1990"
              max={new Date().getFullYear() + 1}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Price (INR)</label>
            <input 
              type="number" 
              value={form.price} 
              onChange={(e)=>set({price:e.target.value})}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Mileage (km)</label>
            <input 
              type="number" 
              value={form.mileage} 
              onChange={(e)=>set({mileage:e.target.value})}
              className="filter-input"
              disabled={isLoading}
              min="0"
              step="1000"
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Fuel</label>
            <select 
              value={form.fuel} 
              onChange={(e)=>set({fuel:e.target.value})}
              className="filter-input"
              disabled={isLoading}
            >
              {FUELS.filter(f=>f!=="Any").map((f)=>(<option key={f} value={f}>{f}</option>))}
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Transmission</label>
            <select 
              value={form.transmission} 
              onChange={(e)=>set({transmission:e.target.value})}
              className="filter-input"
              disabled={isLoading}
            >
              {TRANSMISSIONS.filter(t=>t!=="Any").map((t)=>(<option key={t} value={t}>{t}</option>))}
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <input 
              value={form.location} 
              onChange={(e)=>set({location:e.target.value})} 
              placeholder="City, State"
              className="filter-input"
              disabled={isLoading}
            />
          </div>
          <div className="filter-group">
            <label className="filter-label">Image URL</label>
            <input 
              value={form.image} 
              onChange={(e)=>set({image:e.target.value})} 
              placeholder="https://..."
              className="filter-input"
              disabled={isLoading}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-end mt-6 modal-actions">
          <button 
            onClick={() => {
              console.log("Cancel button clicked");
              onOpenChange(false);
            }} 
            className="header-button header-button-secondary"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            className="header-button header-button-primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading-spinner"></span>
                Publishing...
              </>
            ) : (
              <>
                <Plus className="w-4 h-4"/> Publish
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function emptyIfAny(v){
  return v === "Any" ? "" : v;
}

function defaultFilters(){
  return {
    make: "Any",
    fuel: "Any",
    transmission: "Any",
    minYear: 0,
    maxPrice: 0,
    maxMileage: 0,
    location: "",
    featuredOnly: false,
    sortBy: "newest",
  }
}

export default function App(){
  const [cars, setCars] = useState(MOCK_CARS);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(defaultFilters());
  const [openCar, setOpenCar] = useState(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "compact"
  const [loginOpen, setLoginOpen] = useState(false); // New state for login modal
  const [signupOpen, setSignupOpen] = useState(false); // New state for signup modal
  const [sellOpen, setSellOpen] = useState(false); // State for sell form modal
  const [buyOpen, setBuyOpen] = useState(false); // State for buy form modal
  const [bidOpen, setBidOpen] = useState(false); // State for bid form modal

   useEffect(() => {
     console.log("Login modal state updated:", loginOpen);
   }, [loginOpen]);

   const handleLoginClick = () => {
     console.log("Login button clicked - opening modal"); // Log to confirm button click
     console.log("Login modal state before update:", loginOpen); // Log the state before update
     setLoginOpen(true); // Open the login modal
     console.log("Login modal state after update:", loginOpen); // Log the updated state
     console.log("Setting loginOpen to true"); // Log the state change
   }; // Handler for login button

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase();
    let out = cars.filter((c)=>{
      const matchesQuery = q ?
        [c.make, c.model, c.location].join(" ").toLowerCase().includes(q) : true;
      const matchesMake = emptyIfAny(filters.make) ? c.make === filters.make : true;
      const matchesFuel = emptyIfAny(filters.fuel) ? c.fuel === filters.fuel : true;
      const matchesTrans = emptyIfAny(filters.transmission) ? c.transmission === filters.transmission : true;
      const matchesYear = filters.minYear ? c.year >= filters.minYear : true;
      const matchesPrice = filters.maxPrice ? c.price <= filters.maxPrice : true;
      const matchesMileage = filters.maxMileage ? c.mileage <= filters.maxMileage : true;
      const matchesLocation = filters.location ? c.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const matchesFeatured = filters.featuredOnly ? c.featured : true;
      return matchesQuery && matchesMake && matchesFuel && matchesTrans && matchesYear && matchesPrice && matchesMileage && matchesLocation && matchesFeatured;
    });

    switch(filters.sortBy){
      case "priceAsc": out.sort((a,b)=>a.price-b.price); break;
      case "priceDesc": out.sort((a,b)=>b.price-a.price); break;
      case "mileageAsc": out.sort((a,b)=>a.mileage-b.mileage); break;
      default: // newest
        out.sort((a,b)=> new Date(b.postedAt) - new Date(a.postedAt));
    }
    return out;
  }, [cars, query, filters]);

  const handleCreate = (newCar)=> setCars((c)=> [newCar, ...c]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header 
        onCreate={() => setCreateOpen(true)} 
        onLogin={() => {
          console.log("onLogin prop passed to Header");
          handleLoginClick();
        }}
        onBuy={() => setBuyOpen(true)}
        onSell={() => setSellOpen(true)}
      />
      <Hero query={query} setQuery={setQuery} />

      {/* Render LoginForm conditionally */}
      {loginOpen && <LoginForm onClose={() => setLoginOpen(false)} onCreateAccount={() => { setLoginOpen(false); setSignupOpen(true); }} onLoginSuccess={() => setBidOpen(true)} />}
      {/* Render SignupForm conditionally */}
      {signupOpen && <SignupForm onClose={() => setSignupOpen(false)} onAlreadyHaveAccount={() => { setSignupOpen(false); setLoginOpen(true); }} />}

      <main className="max-w-7xl mx-auto px-4">
        <Filters filters={filters} setFilters={setFilters} />

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-gray-600">{filtered.length} result{filtered.length!==1 && 's'}</div>
          <div className="view-toggle">
            <button 
              className={`view-toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button 
              className={`view-toggle-button ${viewMode === 'compact' ? 'active' : ''}`}
              onClick={() => setViewMode('compact')}
            >
              Compact
            </button>
          </div>
        </div>

        <div className={`cars-grid ${viewMode === 'compact' ? 'compact' : ''}`}>
          <AnimatePresence>
            {filtered.map((car)=> (
              <CarCard key={car.id} car={car} onOpen={setOpenCar} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="py-10 text-center">
              <p className="text-gray-600">No cars match your filters. Try broadening your search.</p>
              <button onClick={()=>setFilters(defaultFilters())} className="empty-state-button">Reset Filters</button>
            </div>
          </div>
        )}

        <Footer />
      </main>

      <DetailsDialog openCar={openCar} setOpenCar={setOpenCar} />
      <CreateListingDialog open={createOpen} onOpenChange={setCreateOpen} onCreate={handleCreate} />
      <SellCarForm 
        open={sellOpen} 
        onOpenChange={setSellOpen} 
        onSubmit={handleCreate}
      />
      <BuyCarForm 
        open={buyOpen} 
        onOpenChange={setBuyOpen} 
        onSearch={(searchFilters) => {
          console.log("Search filters:", searchFilters);
          // Apply the search filters to the main filters
          setFilters(prev => ({
            ...prev,
            ...searchFilters,
            make: searchFilters.make === "Any" ? "" : searchFilters.make,
            fuel: searchFilters.fuel === "Any" ? "" : searchFilters.fuel,
            transmission: searchFilters.transmission === "Any" ? "" : searchFilters.transmission,
            condition: searchFilters.condition === "Any" ? "" : searchFilters.condition
          }));
        }}
      />
      <BidForm 
        open={bidOpen} 
        onOpenChange={setBidOpen} 
      />
    </div>
  );
}
