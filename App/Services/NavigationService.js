let _navigator;

const setNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
}

const goBack = () => {
  if (!_navigator) {
    return;
  }
  return _navigator.goBack();
}

const navigate = (screen, params = {}) => {
  if (!_navigator) {
    return;
  }
  _navigator.navigate(screen, params);
}

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
  setNavigator,
  goBack,
  navigate,
}