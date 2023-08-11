import useThemeState from '~/stores/theme'

export function useHome() {
  const { mode, changeMode } = useThemeState()

  const login = async () => {
    const res = await fetch(`/api/home`)
    // const res = await fetch('/api/product', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: 'sabda',
    //   }),
    // })

    const response = await res.json()
    console.log({ response })
  }

  return {
    datas: { mode },
    methods: { changeMode, login },
  }
}
