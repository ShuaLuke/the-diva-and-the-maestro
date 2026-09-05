/*
  Cast of characters. Placeholder entries drawn from the prologue, the chapter titles, and standard
  references. Replace each `text` with the book's own biographic summary (pp. 331–342).
*/
export interface Person {
  name: string;
  dates: string;
  role: string;
  text: string;
  group: 'historic' | 'family';
  archive?: string; // slug of an archive item
}

export const people: Person[] = [
  { name: 'Paul Laurence Dunbar', dates: '1872–1906', role: 'Poet, lyricist', group: 'historic', archive: 'paul-laurence-dunbar-1903',
    text: 'The most celebrated Black poet of his day and Cook\'s partner on Clorindy and In Dahomey. In the prologue he is the kind one, the friend who calls Cook "Marion" to calm him down.' },
  { name: 'Harry T. Burleigh', dates: '1866–1949', role: 'Baritone, composer', group: 'historic', archive: 'harry-burleigh-1917',
    text: 'Singer and composer who brought the spirituals to Dvořák and, through him, into the American concert hall. He plays for Abbie at her audition.' },
  { name: 'Antonín Dvořák', dates: '1841–1904', role: 'Composer', group: 'historic',
    text: 'The Czech composer who directed the National Conservatory in New York from 1892 to 1895 and declared that America\'s music would be built on Black and Native sources. Cook was his student.' },
  { name: 'Joseph Joachim', dates: '1831–1907', role: 'Violinist', group: 'historic',
    text: 'The greatest violinist of the nineteenth century and Brahms\'s close collaborator. Cook studied with him in Berlin as a teenager.' },
  { name: 'George Lederer', dates: '1861–1938', role: 'Producer', group: 'historic',
    text: 'Broadway producer and manager of the Casino Theatre. In the prologue he is the voice from the back of the roof garden who says "give her thirty-five a week."' },
  { name: 'Bert Williams and George Walker', dates: '1874–1922 · 1872–1911', role: 'Comedy team', group: 'historic', archive: 'in-dahomey-cakewalk-1903',
    text: 'The most successful Black performers of their era. Cook wrote the music for their shows In Dahomey and Bandanna Land.' },
  { name: 'Aida Overton Walker', dates: '1880–1914', role: 'Dancer, singer', group: 'historic', archive: 'in-dahomey-williams-walker-1903',
    text: 'George Walker\'s wife and the leading Black woman on the musical stage before Abbie. She taught the cake walk to London society during the In Dahomey run.' },
  { name: 'Sissieretta Jones', dates: '1868–1933', role: 'Soprano', group: 'historic', archive: 'sissieretta-jones-1905',
    text: '"The Black Patti," the first Black woman to sing at the White House. The singer a fourteen-year-old Abbie believed she could equal.' },
  { name: 'Diamond Jim Brady', dates: '1856–1917', role: 'Financier, bon vivant', group: 'historic',
    text: 'The jewel-covered railroad millionaire of Gilded Age Broadway. The book\'s tenth chapter is called "Thank You, Diamond Jim."' },
  { name: 'Sidney Bechet', dates: '1897–1959', role: 'Clarinetist, saxophonist', group: 'historic',
    text: 'The New Orleans virtuoso whom Cook took to Europe with the Southern Syncopated Orchestra in 1919, where a Swiss conductor wrote the first serious review of a jazz musician.' },
  { name: 'Duke Ellington', dates: '1899–1974', role: 'Composer, bandleader', group: 'historic',
    text: 'Ellington credited Cook with his musical education, conducted in taxi rides around Central Park. "First find the logical way," Cook told him, "and when you find it, avoid it."' },
  { name: 'John Hartwell Cook', dates: '1833–1879', role: 'Will\'s father', group: 'family',
    text: 'Lawyer, dean of Howard University\'s law department, and activist for Negro rights. His death when Will was ten is the wound the prologue names.' },
  { name: 'Isabel Marion Lewis Cook', dates: '1840s–?', role: 'Will\'s mother', group: 'family',
    text: 'An Oberlin graduate. Will took her middle name as his stage name.' },
  { name: 'Aunt Jo and Aunt Alice', dates: '', role: 'Abbie\'s aunts', group: 'family',
    text: 'The conservative aunts who raised Abbie. It is Aunt Jo who counts out her pennies for the dress and walks the twenty-five blocks to the Casino Theatre.' },
  { name: 'Marion Abigail Cook', dates: '1900–?', role: 'Daughter', group: 'family',
    text: 'Abbie and Will Marion\'s first child.' },
  { name: 'Will Mercer Cook', dates: '1903–1987', role: 'Son', group: 'family',
    text: 'Professor of Romance languages at Howard University and United States Ambassador to Niger, Senegal, and the Gambia. Father of Jacques Cook. The box was found in his house.' },
  { name: 'Jacques Cook', dates: '', role: 'Grandson, author', group: 'family',
    text: 'Found the box. Co-author of The Diva and the Maestro.' },
];
