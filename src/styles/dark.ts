
const colors = {
  primary: '#2c3e50',
}

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
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

export type DarkTheme = typeof darkTheme
export default darkTheme
