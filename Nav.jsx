<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Canaria Records — 歌ってみたMIX サブスク</title>
<link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="components.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap">
</head>
<body>
<div id="root"></div>

<script crossorigin src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"></script>

<script type="text/babel" src="Nav.jsx"></script>
<script type="text/babel" src="Hero.jsx"></script>
<script type="text/babel" src="Profile.jsx"></script>
<script type="text/babel" src="Consult.jsx"></script>
<script type="text/babel" src="Pricing.jsx"></script>
<script type="text/babel" src="Gear.jsx"></script>
<script type="text/babel" src="FAQ.jsx"></script>
<script type="text/babel" src="Contact.jsx"></script>

<script type="text/babel">
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <hr className="divider" />
      <Profile />
      <Consult />
      <Pricing />
      <hr className="divider" />
      <Gear />
      <hr className="divider" />
      <FAQ />
      <hr className="divider" />
      <Contact />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>
