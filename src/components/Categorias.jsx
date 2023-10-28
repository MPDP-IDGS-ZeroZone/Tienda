import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';

export default function MenuIntroduction() {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Dropdown>
      <TriggerButton>Categorias</TriggerButton>
      <Menu slots={{ listbox: StyledListbox }}>
        <StyledMenuItem onClick={createHandleMenuClick('terror')}>
          Terror
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Accion')}>
          Accion
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Accion')}>
          Accion
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Anime')}>
          RPG
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Carreras')}>
          Carreras
        </StyledMenuItem>
        <StyledMenuItem onClick={createHandleMenuClick('Mundo Abierto')}>
         Mundo Abierto
        </StyledMenuItem>
      </Menu>
    </Dropdown>
  );
}

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 6px;
  min-width: 200px;
  border-radius: 12px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  user-select: none;
  cursor: pointer;



  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  background-color: #333;
  color: white;
  transition: background-color 0.2s, color 0.2s; /* Agrega una transición para el cambio de color */
  &:hover {
    background-color: ${grey[500]}; /* Cambia el color de fondo al pasar el cursor */
  }

  &:hover {
    cursor: pointer;
    
  }

  &:focus-visible {
    cursor: pointer;

    
  }
  `,
);