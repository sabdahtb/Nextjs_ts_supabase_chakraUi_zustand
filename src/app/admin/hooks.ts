import useThemeState from '~/stores/theme'

export function useAdmin() {
  const { mode, changeMode } = useThemeState()
  return {
    datas: { mode },
    methods: { changeMode },
  }
}
