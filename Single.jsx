<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>単発依頼 — Canaria Records 歌ってみたMIX</title>
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
<script type="text/babel" src="Single.jsx"></script>
<script type="text/babel" src="Contact.jsx"></script>

<script type="text/babel">
function App() {
  return (
    <>
      <Nav />
      <Single />
      <Footer />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
</script>
</body>
</html>
