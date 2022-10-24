const getCurrentRoute = (navigation) => {
  const {routes, index} = navigation;
  if (routes.length < 1 || typeof routes[index] == 'undefined') {
    return null;
  }
  if (
    routes[index] && 
    (
      typeof routes[index].routes == 'undefined' ||
      routes[index].routes.length < 1
    )
  ) {
    return routes[index];
  }
  return getCurrentRoute(routes[index]);
}

export {
  getCurrentRoute,
}