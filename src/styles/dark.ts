
const colors = {
  primaryDark: '#2c3e50',
}

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  background: '#999',
  intro: {
    title: {
      font: '"Open Sans", sans-serif',
    },
    header: {
      background: colors.primaryDark,
    },
    background: 'rgb(24, 188, 156) none repeat scroll 0% 0% / cover',
  }
}

export type DarkTheme = typeof darkTheme
export default darkTheme
