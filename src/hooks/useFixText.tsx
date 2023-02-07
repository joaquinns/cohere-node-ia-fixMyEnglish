import { useEffect, useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition
} from 'react-speech-recognition'
import { fixMyEnglish } from '../services/ia'

export const useFixText = () => {
  const [textToFix, setTextToFix] = useState('')
  const [fixedText, setFixedText] = useState<string | null>(null)
  const [definitions, setDefinitions] = useState([])
  const [loading, setLoading] = useState(false)
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition()

  const handleChangeTextToFix = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextToFix(e.target.value)
  }

  const handleFix = async (input: string) => {
    setLoading(true)
    const [textFixed, definitionFixedText] = await fixMyEnglish(input)
    setLoading(false)
    setFixedText(textFixed)
    console.log(definitionFixedText, 'definitions')
    setDefinitions(definitionFixedText.trim().split('.'))
  }

  useEffect(() => {
    if (transcript) {
      setTextToFix(transcript)
    }
  }, [transcript])

  useEffect(() => {
    if (listening) {
      setTextToFix(transcript)
    }
  }, [listening])

  return {
    loading,
    browserSupportsSpeechRecognition,
    definitions,
    textToFix,
    fixedText,
    handleChangeTextToFix,
    handleFix,
    listening,
    SpeechRecognition
  }
}
