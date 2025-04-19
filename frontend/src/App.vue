<template>
  <div id="app-wrapper">
    <div id="sidebar">Sidebar</div>
    <div id="content">
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
      <nav id="nav">
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/map">Go to Map</RouterLink>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
#app-wrapper {
  color: #888;
  margin: 10px;
  display: flex;
  min-height: 96vh;
}
#sidebar {
  background: white;
  display: flex;
  width: 25%;
  margin-right: 10px;
  border: 1px solid lightgray;
  padding: 10px;
}
#content {
  background: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightgray;
  padding: 10px;
}
#nav {
  width: 25%;
  border: 2px solid pink;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
