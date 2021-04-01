import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from './index'

describe('useForms', () => {
  describe('when user types', () => {
    test('change the values', () => {
      const { result } = renderHook(() => useForm({
        initialValues: {
          nome: 'Mario'
        }
      }))
      const initialValues = { nome: 'Mario' }
      expect(result.current.values).toEqual(initialValues)
      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Juliana'
        }
      }
      act(() => result.current.handleChange(event))
      expect(result.current.values).toEqual({ nome: 'Juliana' })
    })
  })
})
