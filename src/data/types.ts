// types/open-role.ts
export type Role = {
  title: string;
  location: string;
  href: string;
};

export type RoleCategory = {
  name: string;
  roles: Role[];
};
