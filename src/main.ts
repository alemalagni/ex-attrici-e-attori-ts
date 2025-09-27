import './style.css'

type Person = {
  readonly id: number;
  readonly name: string;
  birth_year: number;
  death_year?: number;
  biography: string;
  image: string;
}

type Actress = Person & {
  most_famous_movies: [string, string, string];
  awards: string;
  nationality: 'American' | 'British' | 'Australian' | 'Israeli-American' | 'South African' | 'French' | 'Indian' | 'Israeli' | 'Spanish' | 'South Korean' | 'Chinese';
}

function isActress(data: any): data is Actress {
  return data && typeof data.id === 'number' && typeof data.name === 'string' && Array.isArray(data.most_famous_movies) && data.most_famous_movies.length === 3 && typeof data.awards === 'string' && typeof data.nationality === 'string';
}

async function getActress(id: number): Promise<Actress | null> {
  const response = await fetch(`http://localhost:3333/actresses/${id}`);
  const data = await response.json();

  if (isActress(data)) {
    return data;
  }

  return null;
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  </div>
`

