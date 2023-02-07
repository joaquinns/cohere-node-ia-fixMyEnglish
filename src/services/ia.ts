export async function fixMyEnglish(input: string) {
  const data = {
    model: 'command-xlarge-20221108',
    prompt: `This is a spell checker generator and detect only all the verbs and get their definitions by the english dictionary.
--
Incorrect sample: "I are good!"
Correct sample: "I am good!] good definition: Of a kind that is pleasing or enjoyable, or of high quality"
--
Incorrect sample: "I have 22 years old."
Correct sample: "I am 22 years old] years definition: A period of approximately the same length in other calendars."
--
Incorrect sample: "I don't can know"
Correct sample: "I don't know] know definition: To perceive or understand as fact or truth; to apprehend clearly and with certainty."
--
incorrect sample: "I good in this"
Correct sample: "I am good in this] good definition: Morally excellent, virtuous, righteous"
--
incorrect sample: "Right now i am busy for my work"
correct sample: "Right now I am busy for my work] busy definition: Having a great deal to do. work: productive or operative activity"
--
Incorrect sample: "${input}"
Correct sample:`,
    max_tokens: 300,
    temperature: 0.3,
    k: 0,
    p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE'
  }

  const response = await fetch('https://api.cohere.ai/generate', {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${import.meta.env.VITE_COHERE_KEY}`,
      'Content-Type': 'application/json',
      'Cohere-Version': '2022-12-06'
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .catch((err) => err)

  const { text } = response.generations[0]
  console.log(text, 'from ia.ts')
  return text
    .replace('--', '')
    .replace('?', '')
    .replace('!', '')
    .replaceAll('"', '')
    .trim()
    .split(']')
}
