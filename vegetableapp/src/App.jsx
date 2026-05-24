import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'
import './App.css'

const products = [
  {
    id: 'tomato',
    name: 'Vine Tomatoes',
    price: 4.99,
    description: 'Sweet, juicy tomatoes perfect for salads and sauces.',
    badge: 'Fresh',
  },
  {
    id: 'spinach',
    name: 'Baby Spinach',
    price: 5.49,
    description: 'Tender leaves for smoothies, salads, and sautéing.',
    badge: 'Green',
  },
  {
    id: 'carrot',
    name: 'Orange Carrots',
    price: 3.99,
    description: 'Crunchy carrots that stay crisp for days.',
    badge: 'Crunchy',
  },
  {
    id: 'broccoli',
    name: 'Broccoli Florets',
    price: 6.29,
    description: 'Tender broccoli packed with fiber and flavor.',
    badge: 'Healthy',
  },
  {
    id: 'potato',
    name: 'Russet Potatoes',
    price: 4.39,
    description: 'Perfect for roasting, mashing, and baked sides.',
    badge: 'Comfort',
  },
  {
    id: 'pepper',
    name: 'Bell Peppers',
    price: 5.19,
    description: 'Colorful peppers for fresh dishes and snacking.',
    badge: 'Bright',
  },
]

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

function App() {
  const [cart, setCart] = useState({})
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [contactStatus, setContactStatus] = useState('')
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    card: '',
    address: '',
  })
  const [paymentStatus, setPaymentStatus] = useState('')

  const cartItems = Object.values(cart)
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const addToCart = (product) => {
    setCart((current) => {
      const existing = current[product.id]
      const quantity = existing ? existing.quantity + 1 : 1
      return {
        ...current,
        [product.id]: { ...product, quantity },
      }
    })
  }

  const updateQuantity = (id, nextValue) => {
    setCart((current) => {
      const item = current[id]
      if (!item) return current
      const quantity = Math.max(1, item.quantity + nextValue)
      return {
        ...current,
        [id]: { ...item, quantity },
      }
    })
  }

  const removeFromCart = (id) => {
    setCart((current) => {
      const next = { ...current }
      delete next[id]
      return next
    })
  }

  const handleContactChange = (event) => {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setContactStatus(
      `Thanks, ${contactForm.name || 'friend'}! Your message has been received.`,
    )
    setContactForm({ name: '', email: '', message: '' })
  }

  const handleCheckoutChange = (event) => {
    const { name, value } = event.target
    setCheckoutForm((current) => ({ ...current, [name]: value }))
  }

  const handlePaymentSubmit = (event) => {
    event.preventDefault()
    if (cartCount === 0) {
      setPaymentStatus('Add items to your cart before placing an order.')
      return
    }
    setPaymentStatus(
      `Order confirmed! ${checkoutForm.name || 'Customer'}, we will email you at ${checkoutForm.email || 'your address'} with delivery details.`,
    )
    setCart({})
    setCheckoutForm({ name: '', email: '', card: '', address: '' })
  }

  return (
    <Router>
      <div className="app-shell">
        <header className="site-header">
          <Link to="/" className="brand">
            Green Basket
          </Link>
          <nav className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/order">Order</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="cart-chip">
            🛒 <span>{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  products={products}
                  addToCart={addToCart}
                  cartTotal={cartTotal}
                  cartCount={cartCount}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/contact"
              element={
                <ContactPage
                  form={contactForm}
                  status={contactStatus}
                  onChange={handleContactChange}
                  onSubmit={handleContactSubmit}
                />
              }
            />
            <Route
              path="/order"
              element={
                <OrderPage
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  paymentStatus={paymentStatus}
                  checkoutForm={checkoutForm}
                  onCheckoutChange={handleCheckoutChange}
                  onPaymentSubmit={handlePaymentSubmit}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
          </Routes>
        </main>

        <footer className="site-footer">
          <div>
            <strong>Green Basket</strong> — fresh vegetables, simple ordering,
            local delivery.
          </div>
          <div>Made with care for your kitchen.</div>
        </footer>
      </div>
    </Router>
  )
}

function HomePage({ products, addToCart, cartTotal, cartCount }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Vegetable Store</span>
          <h1>Fresh vegetables delivered to your door</h1>
          <p>
            Shop seasonal produce, build your cart, and place an order with fast
            checkout. Local, healthy, and made for everyday meals.
          </p>
          <div className="hero-actions">
            <Link to="/order" className="button button-primary">
              View cart ({cartCount})
            </Link>
            <Link to="/contact" className="button button-secondary">
              Contact us
            </Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-card">
            <h2>Quick cart preview</h2>
            <p>Add veggies and view your total instantly.</p>
            <div className="hero-stat">
              <span>Total</span>
              <strong>{currency.format(cartTotal)}</strong>
            </div>
            <div className="hero-stat">
              <span>Delivered in</span>
              <strong>1-2 business days</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Popular picks</span>
          <h2>Shop vegetables that taste amazing and cook easily.</h2>
          <p>
            Add produce to your cart, choose delivery details on the order page,
            and complete the payment form when you are ready.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-badge">{product.badge}</div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="product-price">{currency.format(product.price)}</span>
                <button
                  className="button button-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="content-card">
      <div className="section-heading">
        <span className="eyebrow">About Green Basket</span>
        <h2>We make vegetable shopping easy and reliable.</h2>
      </div>
      <div className="text-block">
        <p>
          Green Basket brings farm-fresh vegetables straight to your kitchen.
          Every order is hand-picked, packed with care, and ready for fast
          delivery.
        </p>
        <p>
          Our mission is to help you eat healthy without extra time or effort.
          Whether you need dinner ingredients or snack-ready produce, our order
          page keeps checkout simple.
        </p>
      </div>
      <div className="feature-grid">
        <div className="feature-card">
          <strong>Local quality</strong>
          <p>Fresh vegetables sourced from trusted farms near you.</p>
        </div>
        <div className="feature-card">
          <strong>Easy ordering</strong>
          <p>Add items to your cart, fill out delivery details, and place your order.</p>
        </div>
        <div className="feature-card">
          <strong>Fast support</strong>
          <p>Contact us by email or form if you need help with your order.</p>
        </div>
      </div>
    </section>
  )
}

function ContactPage({ form, status, onChange, onSubmit }) {
  return (
    <section className="content-card">
      <div className="section-heading">
        <span className="eyebrow">Get in touch</span>
        <h2>Have a question or special request?</h2>
      </div>
      <form className="form-card" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="How can we help you?"
            rows="5"
            required
          />
        </label>
        <button type="submit" className="button button-primary">
          Send message
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  )
}

function OrderPage({
  cartItems,
  cartTotal,
  paymentStatus,
  checkoutForm,
  onCheckoutChange,
  onPaymentSubmit,
  updateQuantity,
  removeFromCart,
}) {
  return (
    <section className="content-card">
      <div className="section-heading">
        <span className="eyebrow">Your order</span>
        <h2>Review your cart and complete payment.</h2>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty. Visit the home page to add fresh vegetables.</p>
          <Link to="/" className="button button-secondary">
            Browse vegetables
          </Link>
        </div>
      ) : (
        <div className="order-layout">
          <div className="cart-section">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p>{currency.format(item.price)} each</p>
                </div>
                <div className="cart-actions">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
                <div className="cart-item-total">
                  {currency.format(item.price * item.quantity)}
                </div>
              </div>
            ))}
            <div className="order-summary">
              <span>Subtotal</span>
              <strong>{currency.format(cartTotal)}</strong>
            </div>
          </div>

          <form className="checkout-form" onSubmit={onPaymentSubmit}>
            <label>
              Full name
              <input
                type="text"
                name="name"
                value={checkoutForm.name}
                onChange={onCheckoutChange}
                placeholder="Jane Doe"
                required
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                value={checkoutForm.email}
                onChange={onCheckoutChange}
                placeholder="jane@example.com"
                required
              />
            </label>
            <label>
              Delivery address
              <input
                type="text"
                name="address"
                value={checkoutForm.address}
                onChange={onCheckoutChange}
                placeholder="123 Farm Lane"
                required
              />
            </label>
            <label>
              Card number
              <input
                type="text"
                name="card"
                value={checkoutForm.card}
                onChange={onCheckoutChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </label>
            <button type="submit" className="button button-primary">
              Place order
            </button>
            {paymentStatus && <p className="form-status">{paymentStatus}</p>}
          </form>
        </div>
      )}
    </section>
  )
}

export default App
