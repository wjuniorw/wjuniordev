
const colors = {
  primary: '#2c3e50',
}

const lightTheme = {
  body: '#FFF',
  text: '#363537',
  toggleBorder: '#FFF',
  background: '#363537',
  intro: {
    title: {
      color: '#FAFAFA',
      font: '"Open Sans", sans-serif',
    },
    header: {
      background: colors.primary,
    },
    background: 'rgb(24, 188, 156) none repeat scroll 0% 0% / cover',
  },
  footer: {
    text: '#9e9e9e',
    background: colors.primary,
  }
}

export type LightTheme = typeof lightTheme
export default lightTheme
