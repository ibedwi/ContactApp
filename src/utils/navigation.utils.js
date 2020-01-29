import { StackActions, NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

function popAction() {
  _navigator.dispatch(
    StackActions.pop({
      n: 1
    })
  )
}


function resetAction( paramsInput ) {
  const navigateAction = NavigationActions.navigate({
    routeName: 'home',
    params: {paramsInput},
    action: NavigationActions.navigate({ routeName: 'home', params: paramsInput })
  })

  return (
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate(
          navigateAction
        )
      ]
    })
  )
} 

function logOutAction() {
  StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName: 'login'})]
  })
}

export default {
  setTopLevelNavigator,
  navigate,
  popAction,
  resetAction,
  logOutAction
}