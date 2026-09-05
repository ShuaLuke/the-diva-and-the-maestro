/*
  The archive.
  One entry per photograph, score, program, place, or recording.
  To add an item: drop the image into src/assets/archive/, import it below, and add an entry.
  Every entry needs a source and a rights line. The site shows both on the item's page.
*/
import type { ImageMetadata } from 'astro';

import abbiePortrait from '../assets/archive/abbie-mitchell-portrait.jpg';
import willPortrait from '../assets/archive/will-marion-cook-portrait.jpg';
import will1910 from '../assets/archive/will-marion-cook-1910.jpg';
import darktown from '../assets/archive/darktown-is-out-tonight-cover-1898.jpg';
import loveCottage from '../assets/archive/love-in-a-cottage-cover-1898.jpg';
import bonBon from '../assets/archive/bon-bon-buddy-cover-1907.jpg';
import dahomeyCakewalk from '../assets/archive/in-dahomey-cakewalk-1903.jpg';
import dahomeyTrio from '../assets/archive/in-dahomey-williams-walker-1903.jpg';
import dahomeyProgram from '../assets/archive/in-dahomey-program-1903.jpg';
import dahomeySeattle from '../assets/archive/in-dahomey-seattle-1905.jpg';
import casinoRoof from '../assets/archive/casino-theatre-roof-garden.jpg';
import cookHouse from '../assets/archive/cook-house-138th-street.jpg';
import sso from '../assets/archive/southern-syncopated-orchestra-1920.jpg';
import dunbar from '../assets/archive/paul-laurence-dunbar-1903.jpg';
import burleigh from '../assets/archive/harry-burleigh-1917.jpg';
import sissieretta from '../assets/archive/sissieretta-jones-1905.jpg';

export type Kind = 'photograph' | 'score' | 'program' | 'place' | 'recording';
export type Track = 'abbie' | 'will' | 'both' | 'world';

export interface ArchiveItem {
  slug: string;
  title: string;
  kind: Kind;
  track: Track;
  date: string;          // display string, e.g. "1898" or "c. 1903"
  year: number;          // for sorting
  image?: ImageMetadata;
  audio?: string;        // path under /public
  people: string[];
  description: string;   // one or two sentences for the tile and the page
  context?: string;      // longer note on the item page
  source: string;
  sourceUrl?: string;
  rights: string;
  featured?: boolean;
}

export const archive: ArchiveItem[] = [
  {
    slug: 'abbie-mitchell-portrait',
    title: 'Abbie Mitchell',
    kind: 'photograph',
    track: 'abbie',
    date: 'undated',
    year: 1910,
    image: abbiePortrait,
    people: ['Abbie Mitchell'],
    description: 'Studio portrait of Abbie Mitchell, reproduced in Maud Cuney-Hare\'s 1936 survey of Black musicians.',
    context: 'Cuney-Hare, herself a pianist and folklorist, placed this portrait beside her account of Mitchell\'s concert career. The photograph is undated; the dress and hair suggest the 1900s or 1910s.',
    source: 'Maud Cuney-Hare, Negro Musicians and Their Music (Washington, D.C.: Associated Publishers, 1936), p. 223',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maud_Cuney_Hare-223-Abbie_Mitchell.jpg',
    rights: 'Public domain. Copyright not renewed.',
    featured: true,
  },
  {
    slug: 'will-marion-cook-portrait',
    title: 'Will Marion Cook',
    kind: 'photograph',
    track: 'will',
    date: 'undated',
    year: 1905,
    image: willPortrait,
    people: ['Will Marion Cook'],
    description: 'Seated portrait of Will Marion Cook, reproduced in Maud Cuney-Hare\'s 1936 survey of Black musicians.',
    source: 'Maud Cuney-Hare, Negro Musicians and Their Music (Washington, D.C.: Associated Publishers, 1936), p. 132',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Maud_Cuney_Hare-132-Will_Marion_Cook.jpg',
    rights: 'Public domain. Copyright not renewed.',
    featured: true,
  },
  {
    slug: 'will-marion-cook-1910',
    title: 'Will Marion Cook, 1910',
    kind: 'photograph',
    track: 'will',
    date: '1910',
    year: 1910,
    image: will1910,
    people: ['Will Marion Cook'],
    description: 'Portrait of Cook at forty-one, the year after the divorce and in the middle of his years with the Clef Club.',
    source: 'New York Public Library Digital Collections',
    sourceUrl: 'https://digitalcollections.nypl.org/items/a7d0e925-f8c0-eff6-e040-e00a18060357',
    rights: 'Public domain.',
  },
  {
    slug: 'darktown-is-out-tonight-1898',
    title: 'Darktown Is Out To-night',
    kind: 'score',
    track: 'will',
    date: '1898',
    year: 1898,
    image: darktown,
    people: ['Will Marion Cook', 'Paul Laurence Dunbar'],
    description: 'Sheet music cover for the cake walk song from Clorindy, or The Origin of the Cake Walk. Words and music credited to "Will Marion."',
    context: 'This is the song Cook plays for Abbie at the audition in the prologue, and the lyrics she balks at. The cover art uses the caricature conventions of the 1890s "coon song" trade that Cook was working inside of and against. Published by M. Witmark & Sons, New York.',
    source: 'New York Public Library, Music Division',
    sourceUrl: 'https://digitalcollections.nypl.org/items/510d47df-f142-a3d9-e040-e00a18064a99',
    rights: 'Public domain. Published in the United States before 1931.',
    featured: true,
  },
  {
    slug: 'love-in-a-cottage-is-best-1898',
    title: 'Love in a Cottage Is Best',
    kind: 'score',
    track: 'will',
    date: '1898',
    year: 1898,
    image: loveCottage,
    people: ['Will Marion Cook', 'Paul Laurence Dunbar'],
    description: 'Sheet music cover for a song from Clorindy, the other number Cook plays at the audition.',
    context: 'Dedicated "to Miss Rose Braham, New York." The copy scanned here carries the stamp of a music shop in La Crosse, Wisconsin, a small sign of how far the Clorindy songs travelled in their first year.',
    source: 'New York Public Library, Music Division',
    sourceUrl: 'https://digitalcollections.nypl.org/items/510d47df-f092-a3d9-e040-e00a18064a99',
    rights: 'Public domain. Published in the United States before 1931.',
    featured: true,
  },
  {
    slug: 'bon-bon-buddy-1907',
    title: 'Bon Bon Buddy',
    kind: 'score',
    track: 'will',
    date: '1907',
    year: 1907,
    image: bonBon,
    people: ['Will Marion Cook', 'George Walker'],
    description: 'Sheet music cover for "Bon Bon Buddy, the Chocolate Drop," music by Cook, lyrics by Alex Rogers, made famous by George Walker.',
    source: 'York University Libraries, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bon-bon_buddy._1907.jpg',
    rights: 'Public domain. Published in the United States before 1931.',
  },
  {
    slug: 'in-dahomey-cakewalk-1903',
    title: 'The cake walk in In Dahomey',
    kind: 'photograph',
    track: 'both',
    date: '1903',
    year: 1903,
    image: dahomeyCakewalk,
    people: ['Bert Williams', 'George Walker', 'Aida Overton Walker', 'Hattie McIntosh', 'Lottie Williams'],
    description: 'From left: Hattie McIntosh, George Walker, Aida Overton Walker, Bert Williams, and Lottie Williams in the 1903 Broadway production of In Dahomey.',
    context: 'In Dahomey, with music by Cook, was the first full-length musical written and performed by Black artists to play a major Broadway house. Abbie Mitchell was in the company that took it to London later that year.',
    source: 'New York Public Library, Billy Rose Theatre Division',
    sourceUrl: 'https://digitalcollections.nypl.org/items/9e772929-b102-50c9-e040-e00a18064dbd',
    rights: 'Public domain.',
    featured: true,
  },
  {
    slug: 'in-dahomey-williams-walker-1903',
    title: 'Williams and Walker in In Dahomey',
    kind: 'photograph',
    track: 'both',
    date: '1903',
    year: 1903,
    image: dahomeyTrio,
    people: ['George Walker', 'Aida Overton Walker', 'Bert Williams'],
    description: 'George Walker, Aida Overton Walker, and Bert Williams link arms for the cake walk.',
    source: 'Wisconsin Historical Society, image 5271',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:In_Dahomey_1903.jpg',
    rights: 'Public domain.',
  },
  {
    slug: 'in-dahomey-program-1903',
    title: 'In Dahomey program',
    kind: 'program',
    track: 'both',
    date: '1903',
    year: 1903,
    image: dahomeyProgram,
    people: ['Will Marion Cook', 'Bert Williams', 'George Walker'],
    description: 'Program from the original 1903 run of In Dahomey.',
    source: 'Via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:In_Dahomey_Original_Program.jpg',
    rights: 'Public domain.',
  },
  {
    slug: 'in-dahomey-seattle-1905',
    title: 'In Dahomey on tour, Seattle',
    kind: 'photograph',
    track: 'will',
    date: '1905',
    year: 1905,
    image: dahomeySeattle,
    people: ['George Walker'],
    description: 'A scene from In Dahomey at the Grand Opera House, Seattle, where it opened January 8, 1905. George Walker is in the company.',
    source: 'J. Willis Sayre Collection of Theatrical Photographs, University of Washington Libraries',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:A_scene_from_%22In_Dahomey%22_(SAYRE_12674).jpg',
    rights: 'Public domain.',
  },
  {
    slug: 'casino-theatre-roof-garden',
    title: 'The Casino Theatre Roof Garden',
    kind: 'place',
    track: 'both',
    date: 'c. 1890s',
    year: 1898,
    image: casinoRoof,
    people: [],
    description: 'The roof garden of the Casino Theatre at Broadway and 39th Street, where Clorindy played in the summer of 1898 and where the prologue\'s audition takes place.',
    context: 'Rudolph Aronson built the Casino in 1882 and added the roof garden so that audiences could escape the heat. Palms, ferns, tables, and a bare stage: it is the setting of the book\'s first scene.',
    source: 'Rudolph Aronson, Theatrical and Musical Memoirs (1913), via Internet Archive',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Casino_Theatre_Roof_Garden.jpeg',
    rights: 'Public domain.',
    featured: true,
  },
  {
    slug: 'cook-house-138th-street',
    title: '221 West 138th Street',
    kind: 'place',
    track: 'will',
    date: 'undated',
    year: 1930,
    image: cookHouse,
    people: ['Will Marion Cook'],
    description: 'The Will Marion Cook House on Strivers\' Row in Harlem, documented by the Historic American Buildings Survey.',
    context: 'Cook lived here during the Harlem years. The house is a National Historic Landmark.',
    source: 'Historic American Buildings Survey, Library of Congress, HABS NY,31-NEYO,111A-1',
    sourceUrl: 'https://www.loc.gov/pictures/item/ny1334.photos.118421p',
    rights: 'Public domain. U.S. government work.',
  },
  {
    slug: 'southern-syncopated-orchestra-1920',
    title: 'The Southern Syncopated Orchestra on tour',
    kind: 'photograph',
    track: 'will',
    date: 'c. 1920',
    year: 1920,
    image: sso,
    people: ['Will Marion Cook'],
    description: 'The orchestra Cook took to Britain in 1919, photographed at a London venue around 1920.',
    context: 'The Southern Syncopated Orchestra played for King George V and introduced European audiences to Sidney Bechet. Its story is the subject of the book\'s chapter "The Expatriates."',
    source: 'Family photograph shared on Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:B207_Southern_Syncopated_Orchestra_on_tour.jpg',
    rights: 'CC BY-SA 4.0. Credit the Wikimedia Commons contributor when reusing.',
  },
  {
    slug: 'paul-laurence-dunbar-1903',
    title: 'Paul Laurence Dunbar',
    kind: 'photograph',
    track: 'world',
    date: '1903',
    year: 1903,
    image: dunbar,
    people: ['Paul Laurence Dunbar'],
    description: 'The poet who wrote the words for Clorindy and In Dahomey, photographed for The Booklovers Magazine.',
    source: 'The Booklovers Magazine, July 1903, via Internet Archive',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paul_Laurence_Dunbar_1903.png',
    rights: 'Public domain.',
  },
  {
    slug: 'harry-burleigh-1917',
    title: 'Harry T. Burleigh',
    kind: 'photograph',
    track: 'world',
    date: '1917',
    year: 1917,
    image: burleigh,
    people: ['Harry T. Burleigh'],
    description: 'The baritone and composer who accompanies Abbie at the audition in the prologue. Signed, New York, March 1917.',
    source: 'Mishkin Studio, N.Y. Portraits Collection, University of Washington Libraries',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Harry_T_Burleigh,_March_1917_(PORTRAITS_293).jpg',
    rights: 'Public domain.',
  },
  {
    slug: 'sissieretta-jones-1905',
    title: 'Sissieretta Jones, "The Black Patti"',
    kind: 'photograph',
    track: 'world',
    date: 'c. 1905',
    year: 1905,
    image: sissieretta,
    people: ['Sissieretta Jones'],
    description: 'The soprano Abbie measured herself against as a girl. The first Black woman to sing at the White House.',
    source: 'Miriam Matthews Photograph Collection, UCLA Library',
    sourceUrl: 'https://digital.library.ucla.edu/catalog/ark:/21198/z1tb2r4f',
    rights: 'Public domain.',
  },
  {
    slug: 'on-emancipation-day-1902',
    title: 'On Emancipation Day',
    kind: 'recording',
    track: 'will',
    date: '1902',
    year: 1902,
    audio: '/audio/on-emancipation-day-1902.ogg',
    people: ['Will Marion Cook', 'Paul Laurence Dunbar'],
    description: 'A 1902 recording of the In Dahomey number, with music by Cook and words by Dunbar.',
    context: 'The earliest recording of Cook\'s music in the archive. Sound recordings made before 1923 entered the public domain in the United States in 2022.',
    source: 'Via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Willam_Marion_Cook_-_On_Emancipation_Day_(1902).ogg',
    rights: 'Public domain.',
  },
];

export const kinds: Record<Kind, string> = {
  photograph: 'Photographs',
  score: 'Sheet music',
  program: 'Programs',
  place: 'Places',
  recording: 'Recordings',
};

export const bySlug = (slug: string) => archive.find((i) => i.slug === slug);
export const featured = archive.filter((i) => i.featured);
export const sorted = [...archive].sort((a, b) => a.year - b.year);
