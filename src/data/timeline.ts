/*
  The timeline. Two tracks, hers and his, with shared entries where the story is theirs together.
  Dates outside the manuscript come from standard references and should be checked against the
  book's biographic summaries. Change the text freely; keep the shape.
*/
export type Track = 'abbie' | 'will' | 'both';

export interface Entry {
  year: string;
  track: Track;
  title: string;
  text: string;
  chapter?: string;   // where the book tells it
  link?: string;      // archive item or page
}

export const timeline: Entry[] = [
  { year: '1869', track: 'will', title: 'Born in Washington, D.C.', text: 'Will Mercer Cook is born January 27 to John Hartwell Cook, a lawyer and dean of Howard University\'s law school, and Isabel Marion Cook.', chapter: 'Ch. 3, Young Master Willie' },
  { year: '1879', track: 'will', title: 'His father dies', text: 'Will is ten. He is sent to his grandparents in Tennessee, the "stubborn, reckless, proud, and bereft" boy on the train that the prologue remembers.', chapter: 'Ch. 3–4' },
  { year: '1884', track: 'abbie', title: 'Born in New York', text: 'Abbie Mitchell is born September 25 to a Jewish father and a Black mother, and is raised largely by her aunts.', chapter: 'Ch. 1–2, Ch. 7' },
  { year: '1880s', track: 'will', title: 'Oberlin, then Berlin', text: 'A violin prodigy, Will studies at Oberlin Conservatory and then in Berlin, where the great violinist Joseph Joachim is his teacher.', chapter: 'Ch. 5, The Young Genius on the Continent' },
  { year: '1890s', track: 'will', title: 'Dvořák and a new American music', text: 'Back in New York, Cook studies with Antonín Dvořák at the National Conservatory and sets out to build a concert music from Black American sources.', chapter: 'Ch. 6, A New American Music' },
  { year: '1898', track: 'both', title: 'Clorindy, and the audition', text: 'Clorindy, or The Origin of the Cake Walk, with words by Paul Laurence Dunbar, opens on the Casino Theatre roof in July. A fourteen-year-old Abbie Mitchell climbs the stairs to audition. Cook hires her at thirty dollars a week.', chapter: 'Prologue, The Audition', link: '/archive/casino-theatre-roof-garden' },
  { year: '1899', track: 'both', title: 'Married', text: 'Abbie and Will Marion marry. She is fifteen. The book calls it an unconventional love affair and does not look away from what that meant.', chapter: 'Ch. 9, A Rocky Start' },
  { year: '1900', track: 'both', title: 'Marion Abigail Cook is born', text: 'Their daughter is born.', chapter: 'Ch. 9–10' },
  { year: '1903', track: 'both', title: 'In Dahomey, and a royal command', text: 'In Dahomey opens on Broadway with Williams and Walker, then sails to London. The company performs at Buckingham Palace for the ninth birthday of the Prince of Wales\'s son. Abbie sings.', chapter: 'Ch. 11–12, Crossing to Freedom, A Royal Fairy Tale', link: '/archive/cake-walk-biograph-1903' },
  { year: '1903', track: 'both', title: 'Will Mercer Cook is born', text: 'Their son, who will grow up to be a professor at Howard and a United States ambassador, and whose house will one day hold the box.', chapter: 'Ch. 12–13' },
  { year: '1905', track: 'both', title: 'The Memphis Students', text: 'Cook organizes the Memphis Students, an early syncopated ensemble, with Abbie as its featured singer. They play New York and then Europe.', chapter: 'Ch. 13–14' },
  { year: '1906–08', track: 'both', title: 'The marriage ends', text: 'Sources disagree on the year. The book tells what happened.', chapter: 'Ch. 14–15, The Crazy Genius, The Mockingbird Flies the Coop' },
  { year: '1908', track: 'will', title: 'Bandanna Land', text: 'Cook\'s music for the last great Williams and Walker show includes "Bon Bon Buddy."', link: '/archive/bon-bon-buddy-1907' },
  { year: '1910s', track: 'abbie', title: 'A career of her own', text: 'Abbie builds a concert and theatre career on both sides of the Atlantic, singing in Europe and with the Lafayette Players in Harlem.', chapter: 'Ch. 16–17, The Survivor' },
  { year: '1917–18', track: 'will', title: 'The war years', text: 'Cook conducts and organizes during the First World War, the subject of "Making the World ‘Safe’ for Democracy."', chapter: 'Ch. 18' },
  { year: '1919', track: 'will', title: 'The Southern Syncopated Orchestra', text: 'Cook takes a thirty-six-piece orchestra to London, plays for King George V, and introduces Europe to Sidney Bechet.', chapter: 'Ch. 19, The Expatriates', link: '/archive/southern-syncopated-orchestra-1920' },
  { year: '1920s', track: 'will', title: 'The Harlem years', text: 'On Strivers\' Row, Cook becomes teacher and goad to a generation of jazz musicians, among them a young Duke Ellington.', chapter: 'Ch. 20, The Harlem Years', link: '/archive/cook-house-138th-street' },
  { year: '1931–34', track: 'abbie', title: 'Tuskegee', text: 'Abbie heads the voice department at Tuskegee Institute.', chapter: 'Ch. 21' },
  { year: '1935', track: 'abbie', title: 'Porgy and Bess', text: 'Abbie creates the role of Clara in the original production of Porgy and Bess and is the first to sing "Summertime" on a stage. The same year she plays in Langston Hughes\'s Mulatto on Broadway.', chapter: 'Ch. 21, A Trailblazer\'s Triumph' },
  { year: '1944', track: 'will', title: 'Will Marion Cook dies', text: 'He dies in New York on July 19, at seventy-five.', chapter: 'Epilogue' },
  { year: '1960', track: 'abbie', title: 'Abbie Mitchell dies', text: 'She dies in New York on March 16, at seventy-five, having outlived her husband by sixteen years and championed his music to the end.', chapter: 'Epilogue, Legacies' },
];
