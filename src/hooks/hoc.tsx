/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   Full Stack Engineer
 */
'use client';

function hasRequiredPermissions(requiredPermissions: string[], userPermissions: string[]): boolean {
  return requiredPermissions.some((permission) =>
    userPermissions.includes(permission)
  )
}

export function hasRole(Component: any, requiredPermissions: string[], userPermissions: string[]){
  return function WithRolesWrapper(props: any) {

    const hasPermission = hasRequiredPermissions(requiredPermissions, userPermissions)
    if (hasPermission) {
      return <Component {...props} />
    } else {
     return false;
    }
  }
}