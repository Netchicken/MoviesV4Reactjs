const movies = [
  {
    copies: "",
    genre: "",
    id: 1,
    plot:
      "1403:- Henry IV finds himself facing uprisings from the Welsh chieftain Owen Glendower and impetuous young Harry Hotspur,son of the Duke of Northumberland,angry with the king for not paying...        ",
    rating: "N/A",
    title: 'Henry IV, Part 1: "The Hollow Crown"',
    year: "2012"
  },
  {
    copies: "",
    genre: "Horror, Sci-Fi, Thriller",
    id: 2,
    plot:
      "Henrik, a much beloved priest, doesn't believe in hell. Upon receiving the news of his fathers death, he starts a journey that will take him through terrifying secrets, distorted childhood memories, and shake the foundation of his belief.",
    rating: "N/A",
    title: "Psalm 21",
    year: "2009"
  },
  {
    copies: "",
    genre: "Action, Crime",
    id: 3,
    plot:
      "The Bride wakens from a four-year coma. The child she carried in her womb is gone. Now she must wreak vengeance on the team of assassins who betrayed her - a team she was once part of.                ",
    rating: "R",
    title: "Kill Bill: Vol. 1",
    year: "2003"
  },
  {
    copies: "",
    genre: "Comedy, Family",
    id: 4,
    plot:
      "A group of smart-talking toddlers find themselves at the center of a media mogul's experiment to crack the code to baby talk. The toddlers must race against time for the sake of babies everywhere.",
    rating: "PG",
    title: "Superbabies: Baby Geniuses 2",
    year: "2004"
  },
  {
    copies: "",
    genre: "Adventure, Fantasy, Mystery",
    id: 5,
    plot:
      "Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    rating: "PG-13",
    title: "Harry Potter and the Deathly Hallows: Part 2",
    year: "2011"
  },
  {
    copies: "2",
    genre: "Action, Thriller",
    id: 6,
    plot:
      "F/X man Rollie Tyler (Bryan Brown) is now a toy maker. Mike Brandon (Tom Mason), the ex-husband of Rolly's girlfriend Kim(Rachel Ticotin), is a cop. He asks Rollie to help catch a killer. The operation goes well until some unknown man kills both the killer and Mike.Mike's boss, Ray Silak (Philip Bosco) says it was the killer who killed Mike but Rollie knows it wasn't. Silak is involved with Mike's death, so he calls on Leo McCarthy (Brian Dennehy), the cop from the last movie, who is now a P.I., for help and they discover it's not just Silak they have to worry about. ",
    rating: "PG-13",
    title: "FX/2",
    year: "1991"
  },
  {
    copies: "",
    genre: "Drama, Fantasy",
    id: 7,
    plot: "A harried movie director retreats into his memories and fantasies.",
    rating: "Not Rated",
    title: "8Â½",
    year: "1963"
  },
  {
    copies: "",
    genre: "Fantasy, Horror, Mystery",
    id: 8,
    plot:
      "A family vacationing in a small town discovers the entire town is inhabited by goblins in disguise as humans, who plan to eat them.",
    rating: "PG-13",
    title: "Troll 2",
    year: "1990"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 9,
    plot:
      "Monsters generate their city's power by scaring children, but they are terribly afraid themselves of being contaminated by children, so when one enters Monstropolis, top scarer Sulley finds his world disrupted.",
    rating: "G",
    title: "Monsters, Inc.",
    year: "2001"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 10,
    plot:
      "Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers, and supposedly Jewish jewelers fight to track down a priceless stolen diamond.",
    rating: "R",
    title: "Snatch.",
    year: "2000"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 11,
    plot:
      "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    rating: "G",
    title: "Toy Story 3",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 12,
    plot:
      "A bitter aging couple with the help of alcohol, use a young couple to fuel anguish and emotional pain towards each other.",
    rating: "Not Rated",
    title: "Who's Afraid of Virginia Woolf?",
    year: "1966"
  },
  {
    copies: "",
    genre: "Horror, Music, Musical",
    id: 13,
    plot:
      "Jerry falls in love with a stripper he meets at a carnival. Little does he know that she is the sister of a gypsy fortune teller whose predictions he had scoffed at earlier. The gypsy turns him into a zombie and he goes on a killing spree.",
    rating: "Not Rated",
    title:
      "The Incredibly Strange Creatures Who Stopped Living and Became Mixed-Up Zombies!!?",
    year: "1964"
  },
  {
    copies: "",
    genre: "Drama, Fantasy",
    id: 14,
    plot: "A harried movie director retreats into his memories and fantasies.",
    rating: "Not Rated",
    title: "8Â½",
    year: "1963"
  },
  {
    copies: "",
    genre: "Comedy, Sport",
    id: 15,
    plot:
      "When a rap mogul from Atlanta tries to join a conservative country club in the Carolinas he runs into fierce opposition from the board President- but it's nothing that he and his entourage can't handle.",
    rating: "PG-13",
    title: "Who's Your Caddy?",
    year: "2007"
  },
  {
    copies: "",
    genre: "Action, Drama, Mystery",
    id: 16,
    plot:
      "Jack Bauer, Director of Field Ops for the Counter-Terrorist Unit of Los Angeles, races against the clock to subvert terrorist plots and save his nation from ultimate disaster.",
    rating: "TV-14",
    title: "24",
    year: "2001"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 17,
    plot:
      "A bigoted Frenchman finds himself forced to impersonate a popular rabbi while on the run from a group of assassins - and the police.",
    rating: "G",
    title: "The Mad Adventures of 'Rabbi' Jacob",
    year: "1973"
  },
  {
    copies: "",
    genre: "Animation, Family",
    id: 18,
    plot:
      "A Cinderella meets her Prince Charming on the ill-fated Titanic. Along for the ride are a rapping dog, other talking animals, and an assortment of wacky humans.",
    rating: "N/A",
    title: "Titanic: The Legend Goes On...",
    year: "2000"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 19,
    plot:
      "Brash NYC policeman Officer Gunther Toody is partnered with stiff, by-the-book Officer Francis Muldoon to protect an important mafia witness prior to testifying against orgainzed crime in ...",
    rating: "PG-13",
    title: "Car 54, Where Are You?",
    year: "1994"
  },
  {
    copies: "",
    genre: "Action, Comedy",
    id: 20,
    plot:
      "A secret agent is called out of retirement to save the world from an evil genius.",
    rating: "PG",
    title: "Leonard Part 6",
    year: "1987"
  },
  {
    copies: "",
    genre: "Comedy, Drama, War",
    id: 21,
    plot:
      "When two escaping American World War II prisoners are killed, the German POW camp barracks black marketeer, J.J. Sefton, is suspected of being an informer.",
    rating: "Not Rated",
    title: "Stalag 17",
    year: "1953"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 22,
    plot:
      "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.",
    rating: "PG-13",
    title: "O Brother, Where Art Thou?",
    year: "2000"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi, Thriller",
    id: 23,
    plot:
      "An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a kindred spirit in a government agent who is exposed to their biotechnology.",
    rating: "R",
    title: "District 9",
    year: "2009"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 24,
    plot:
      "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
    rating: "R",
    title: "Once Upon a Time in America",
    year: "1984"
  },
  {
    copies: "",
    genre: "Drama",
    id: 25,
    plot:
      "A bitter aging couple with the help of alcohol, use a young couple to fuel anguish and emotional pain towards each other.",
    rating: "Not Rated",
    title: "Who's Afraid of Virginia Woolf?",
    year: "1966"
  },
  {
    copies: "",
    genre: "Drama",
    id: 26,
    plot:
      "In late-19th-century Russian high society, St. Petersburg aristocrat Anna Karenina enters into a life-changing affair with the dashing Count Alexei Vronsky.",
    rating: "R",
    title: "Anna Karenina",
    year: "2012"
  },
  {
    copies: "",
    genre: "Biography, Drama, History",
    id: 27,
    plot:
      "The true story of Paul Rusesabagina, a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda.",
    rating: "PG-13",
    title: "Hotel Rwanda",
    year: "2004"
  },
  {
    copies: "",
    genre: "Adventure, Biography, Drama",
    id: 28,
    plot:
      "A flamboyant and controversial British military figure and his conflicted loyalties during his World War I service in the Middle East.",
    rating: "PG",
    title: "Lawrence of Arabia",
    year: "1962"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 29,
    plot:
      "A self-conscious bride is tormented by the memory of her husband's dead first wife.",
    rating: "Not Rated",
    title: "Rebecca",
    year: "1940"
  },
  {
    copies: "",
    genre: "Drama",
    id: 30,
    plot:
      "An epic mosaic of interrelated characters in search of love, forgiveness, and meaning in the San Fernando Valley.",
    rating: "R",
    title: "Magnolia",
    year: "1999"
  },
  {
    copies: "",
    genre: "Drama",
    id: 31,
    plot:
      "A care-free girl is sold to a traveling entertainer, consequently enduring physical and emotional pain along the way.",
    rating: "Not Rated",
    title: "La Strada",
    year: "1954"
  },
  {
    copies: "2",
    genre: "Action, Adventure, Comedy ",
    id: 32,
    plot:
      "Dr. Evil is back...and has invented a new time machine that allows him to go back to the 60's and steal Austin Powers's mojo, inadvertently leaving him \"shagless\". ",
    rating: "PG-13",
    title: "Austin Powers: The Spy Who Shagged Me",
    year: "1999"
  },
  {
    copies: "",
    genre: "Drama",
    id: 33,
    plot:
      "A nurse is put in charge of an actress who can't talk and finds that the actress's persona is melding with hers.",
    rating: "Not Rated",
    title: "Persona",
    year: "1966"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 34,
    plot:
      "Adam, a lonely man with Asperger's Syndrome, develops a relationship with his upstairs neighbor, Beth.",
    rating: "PG-13",
    title: "Adam",
    year: "2009"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 35,
    plot:
      "Roro, a foreign worker in Swedish parks, loves his girlfriend but is about to marry another girl to prevent her from being sent back to Lebanon. Roros best friend, MÃ¥ns, has his own ...",
    rating: "N/A",
    title: "Jalla! Jalla!",
    year: "2000"
  },
  {
    copies: "",
    genre: "Comedy, Horror",
    id: 36,
    plot:
      "A modern-day updating of the Dracula legend that finds Steven, a good-looking American hero devastated by the death of his girlfriend, wandering through Europe and looking for happiness. A ...",
    rating: "N/A",
    title: "Die Hard Dracula",
    year: "1998"
  },
  {
    copies: "",
    genre: "Drama, Romance, War",
    id: 37,
    plot:
      "Set in unoccupied Africa during the early days of World War II: An American expatriate meets a former lover, with unforeseen complications.",
    rating: "PG",
    title: "Casablanca",
    year: "1942"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi, Thriller",
    id: 38,
    plot:
      "In a future British tyranny, a shadowy freedom fighter plots to overthrow it with the help of a young woman.",
    rating: "R",
    title: "V for Vendetta",
    year: "2005"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 39,
    plot:
      "In London, four very different people team up to commit armed robbery, then try to doublecross each other for the loot.",
    rating: "R",
    title: "A Fish Called Wanda",
    year: "1988"
  },
  {
    copies: "",
    genre: "Animation, Action, Adventure",
    id: 40,
    plot:
      "In the Valley of Peace, Po the Panda finds himself chosen as the Dragon Warrior despite the fact that he is obese and a complete novice at martial arts.",
    rating: "PG",
    title: "Kung Fu Panda",
    year: "2008"
  },
  {
    copies: "",
    genre: "Comedy, War",
    id: 41,
    plot:
      "An insane general triggers a path to nuclear holocaust that a war room full of politicians and generals frantically try to stop.",
    rating: "PG",
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: "1964"
  },
  {
    copies: "",
    genre: "Horror",
    id: 42,
    plot:
      "Survivors of a plane crash on a remote island find it is covered by spiders. When bitten, the survivors start turning into spiders!",
    rating: "Unrated",
    title: "Body in the Web",
    year: "1960"
  },
  {
    copies: "",
    genre: "Drama",
    id: 43,
    plot:
      "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more...",
    rating: "R",
    title: "Fight Club",
    year: "1999"
  },
  {
    copies: "",
    genre: "Comedy, Drama",
    id: 44,
    plot:
      "Five high school students, all different stereotypes, meet in detention, where they pour their hearts out to each other, and discover how they have a lot more in common than they thought.",
    rating: "R",
    title: "The Breakfast Club",
    year: "1985"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 45,
    plot:
      "After being betrayed and left for dead in Italy, Charlie Croker and his team plan an elaborate gold heist against their former ally.",
    rating: "PG-13",
    title: "The Italian Job",
    year: "2003"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 46,
    plot: "N/A",
    rating: "N/A",
    title: "Alan Davies: Live at the Lyric",
    year: "1994"
  },
  {
    copies: "",
    genre: "Biography, Comedy, Drama",
    id: 47,
    plot:
      "Embarrassed by his large nose, a romantic poet/soldier romances his cousin by proxy.",
    rating: "PG",
    title: "Cyrano de Bergerac",
    year: "1990"
  },
  {
    copies: "",
    genre: "Comedy, Music",
    id: 48,
    plot:
      "Five friends spend one lost weekend in a mix of music, love and club culture.",
    rating: "R",
    title: "Human Traffic",
    year: "1999"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 49,
    plot:
      "A struggling young comedian takes a menial job on a cruise ship where he hopes for his big chance to make it in the world of cruise ship comedy.",
    rating: "R",
    title: "Going Overboard",
    year: "1989"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Family",
    id: 50,
    plot:
      "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
    rating: "Not Rated",
    title: "The Kid",
    year: "1921"
  },
  {
    copies: "",
    genre: "Comedy, Family, Fantasy",
    id: 51,
    plot:
      "A classic Disney fairytale collides with modern-day New York City in a story about a fairytale princess who is sent to our world by an evil queen. Soon after her arrival, Princess Giselle begins to change her views on life and love after meeting a handsome lawyer. Can a storybook view of romance survive in the real world?",
    rating: "PG",
    title: "Enchanted",
    year: "2007"
  },
  {
    copies: "",
    genre: "Drama, Romance, War",
    id: 52,
    plot:
      "A manipulative Southern belle carries on a turbulent affair with a blockade runner during the American Civil War.",
    rating: "TV-PG",
    title: "Gone with the Wind",
    year: "1939"
  },
  {
    copies: "",
    genre: "Drama, Romance, Sci-Fi",
    id: 53,
    plot:
      "A couple undergo a procedure to erase each other from their memories when their relationship turns sour, but it is only through the process of loss that they discover what they had to begin with.",
    rating: "R",
    title: "Eternal Sunshine of the Spotless Mind",
    year: "2004"
  },
  {
    copies: "",
    genre: "Drama, Film-Noir",
    id: 54,
    plot:
      "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.",
    rating: "Not Rated",
    title: "Sunset Blvd.",
    year: "1950"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 55,
    plot:
      "An undercover state cop who has infiltrated an Irish gang and a mole in the police force working for the same mob race to track down and identify each other before being exposed to the enemy, after both sides realize their outfit has a rat.",
    rating: "R",
    title: "The Departed",
    year: "2006"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 56,
    plot: "A surfer becomes the head of a major company.",
    rating: "PG-13",
    title: "Chairman of the Board",
    year: "1998"
  },
  {
    copies: "",
    genre: "Adventure, Biography, Drama",
    id: 57,
    plot:
      "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
    rating: "R",
    title: "Into the Wild",
    year: "2007"
  },
  {
    copies: "",
    genre: "Biography, Drama",
    id: 58,
    plot:
      "After a brilliant but asocial mathematician accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    rating: "PG-13",
    title: "A Beautiful Mind",
    year: "2001"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 59,
    plot:
      "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    rating: "R",
    title: "City of God",
    year: "2002"
  },
  {
    copies: "",
    genre: "Action, Thriller",
    id: 60,
    plot:
      "John McClane, officer of the NYPD, tries to save wife Holly Gennaro and several others, taken hostage by German terrorist Hans Gruber during a Christmas party at the Nakatomi Plaza in Los Angeles.",
    rating: "R",
    title: "Die Hard",
    year: "1988"
  },
  {
    copies: "",
    genre: "Comedy, Fantasy",
    id: 61,
    plot:
      "When God appears to an assistant grocery manager as a good natured old man, the Almighty selects him as his messenger for the modern world.",
    rating: "PG",
    title: "Oh, God!",
    year: "1977"
  },
  {
    copies: "",
    genre: "Action, Horror, Thriller",
    id: 62,
    plot:
      "A group of teens arrive on an island for a rave--only to discover the island has been taken over by zombies. The group takes refuge in a house where they try to survive the night.",
    rating: "R",
    title: "House of the Dead",
    year: "2003"
  },
  {
    copies: "",
    genre: "Drama, Horror, Mystery",
    id: 63,
    plot:
      'A paranormal expert discovers a house that is at the intersection of so-called "highways" transporting souls in the afterlife.',
    rating: "R",
    title: "Book of Blood",
    year: "2009"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 64,
    plot:
      "In 1954, U.S. Marshal Teddy Daniels is investigating the disappearance of a murderess who escaped from a hospital for the criminally insane and is presumed to be hiding nearby.",
    rating: "R",
    title: "Shutter Island",
    year: "2010"
  },
  {
    copies: "",
    genre: "Comedy, Family, Sport",
    id: 65,
    plot:
      "A trained chimpanzee plays third base for a minor-league baseball team.",
    rating: "PG",
    title: "Ed",
    year: "1996"
  },
  {
    copies: "",
    genre: "Drama",
    id: 66,
    plot:
      "The continuing story of life in the Midwestern town of Bay City, and the love, loss, trials, and triumph of its residents, who come from different backgrounds and social circles. Those who ...",
    rating: "TV-14",
    title: "Another World",
    year: "1964"
  },
  {
    copies: "",
    genre: "Adventure, Biography, Crime",
    id: 67,
    plot:
      "Two Western bank/train robbers flee to Bolivia when the law gets too close.",
    rating: "N/A",
    title: "Butch Cassidy and the Sundance Kid",
    year: "1969"
  },
  {
    copies: "",
    genre: "Drama",
    id: 68,
    plot:
      "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
    rating: "R",
    title: "There Will Be Blood",
    year: "2007"
  },
  {
    copies: "",
    genre: "Adventure, Drama, Sci-Fi",
    id: 69,
    plot:
      "After an encounter with UFOs, a line worker feels undeniably drawn to an isolated area in the wilderness where something spectacular is about to happen.",
    rating: "PG",
    title: "Close Encounters of the Third Kind",
    year: "1977"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Family",
    id: 70,
    plot:
      "Kidz in da Hood is the gripping and warm story of Amina, who came to Sweden with her grandfather three years ago. Amina has not yet received her residency permit and when her grandfather ...",
    rating: "N/A",
    title: "Kidz in da Hood",
    year: "2006"
  },
  {
    copies: "",
    genre: null,
    id: 71,
    plot: null,
    rating: "PG",
    title: "NausicaÃ¤ of the Valley of the Wind",
    year: "1984"
  },
  {
    copies: "",
    genre: "Adventure, Drama, Western",
    id: 72,
    plot:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    rating: "R",
    title: "Django Unchained",
    year: "2012"
  },
  {
    copies: "",
    genre: "Horror, Thriller",
    id: 73,
    plot:
      "Teens trapped on an island are haunted by a demon hidden inside...a pinata.",
    rating: "R",
    title: "Demon Island",
    year: "2002"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 74,
    plot:
      "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice.",
    rating: "Not Rated",
    title: "To Kill a Mockingbird",
    year: "1962"
  },
  {
    copies: "",
    genre: "Action, Thriller",
    id: 75,
    plot:
      "A young cop must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph.",
    rating: "R",
    title: "Speed",
    year: "1994"
  },
  {
    copies: "",
    genre: "Adventure, Family",
    id: 76,
    plot:
      "Mom and dad dump son Cody, daughter Abby, her best friend Marcella and a baby on the farm with Grandpa and Grandma. Purple dinosaur Barney soon appears to entertain kids, and when a large ...",
    rating: "G",
    title: "Barney's Great Adventure",
    year: "1998"
  },
  {
    copies: "",
    genre: "Action, Comedy, Sci-Fi",
    id: 78,
    plot:
      "It is intended to be a comedy film with serious special effects, though it becomes an epic film of laughs as the suppressor of the first series of the film 'The man who saves Earth'...See full synopsis&nbsp;&raquo;",
    rating: "N/A",
    title: "Turks in Space",
    year: "2006"
  },
  {
    copies: "",
    genre: "Action, Drama",
    id: 79,
    plot:
      "Toby is a teenager who doesn't care much about school. In fact, he has his eyes on the title of a prestigious dog-sleigh race. He will have to undergo extensive training in order to win it.",
    rating: "PG",
    title: "Toby McTeague",
    year: "1986"
  },
  {
    copies: "",
    genre: "Crime, Drama, Fantasy",
    id: 80,
    plot:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    rating: "R",
    title: "The Green Mile",
    year: "1999"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 81,
    plot: "Two comedians set out to make their own exploitation video.",
    rating: "N/A",
    title: "Danes Without a Clue",
    year: "1997"
  },
  {
    copies: "",
    genre: "Drama",
    id: 82,
    plot:
      "An ingenue insinuates herself in to the company of an established but aging stage actress and her circle of theater friends.",
    rating: "TV-PG",
    title: "All About Eve",
    year: "1950"
  },
  {
    copies: "",
    genre: "Drama, Family, History",
    id: 83,
    plot:
      "Miracle tells the true story of Herb Brooks (Russell), the player-turned-coach who led the 1980 U.S. Olympic hockey team to victory over the seemingly invincible Russian squad.",
    rating: "PG",
    title: "Miracle",
    year: "2004"
  },
  {
    copies: "",
    genre: "Western",
    id: 84,
    plot:
      "A senator, who became famous for killing a notorious outlaw, returns for the funeral of an old friend and tells the truth about his deed.",
    rating: "Approved",
    title: "The Man Who Shot Liberty Valance",
    year: "1962"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 85,
    plot:
      "When a sports agent has a moral epiphany and is fired for expressing it, he decides to put his new philosophy to the test as an independent with the only athlete who stays with him.",
    rating: "R",
    title: "Jerry Maguire",
    year: "1996"
  },
  {
    copies: "",
    genre: "Drama",
    id: 86,
    plot:
      "A greedy landowner and his backward nephew conspire to block the only water source for an adjoining property in order to bankrupt the owner and force him to sell.",
    rating: "PG",
    title: "Jean de Florette",
    year: "1986"
  },
  {
    copies: "",
    genre: null,
    id: 87,
    plot: null,
    rating: "R",
    title: "AmÃ©lie",
    year: "2001"
  },
  {
    copies: "",
    genre: "Horror, Thriller",
    id: 88,
    plot:
      "Tom returns to his hometown on the tenth anniversary of the Valentine's night massacre that claimed the lives of 22 people. Instead of a homecoming, however, Tom finds himself suspected of committing the murders, and it seems like his old flame is the only one will believes he's innocent.",
    rating: "R",
    title: "My Bloody Valentine",
    year: "2009"
  },
  {
    copies: "",
    genre: "Drama, Mystery",
    id: 89,
    plot:
      "Following the death of a publishing tycoon, news reporters scramble to discover the meaning of his final utterance.",
    rating: "Approved",
    title: "Citizen Kane",
    year: "1941"
  },
  {
    copies: "",
    genre: "Adventure, Family, Fantasy",
    id: 90,
    plot:
      "Harry finds himself mysteriously selected as an under-aged competitor in a dangerous tournament between three schools of magic.",
    rating: "PG-13",
    title: "Harry Potter and the Goblet of Fire",
    year: "2005"
  },
  {
    copies: "",
    genre: "Drama",
    id: 91,
    plot:
      "After local youth Abdel is beaten unconscious by police, a riot ensues on his estate during which a policeman loses his gun. The gun is found by Vinz who threatens he will kill a cop if Abdel dies.",
    rating: "Not Rated",
    title: "La Haine",
    year: "1995"
  },
  {
    copies: "",
    genre: "Adventure, Fantasy, Horror",
    id: 92,
    plot:
      "Fleeing from the cult that murdered his father, a teen is aided in his quest to find the lost city of the fabled Ziox by a secretive drifter.",
    rating: "PG-13",
    title: "The Final Sacrifice",
    year: "1990"
  },
  {
    copies: "",
    genre: null,
    id: 93,
    plot: null,
    rating: "G",
    title: "WALLÂ·E",
    year: "2008"
  },
  {
    copies: "",
    genre: "Animation, Comedy, Family",
    id: 94,
    plot:
      "A rat, who can also cook, makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    rating: "G",
    title: "Ratatouille",
    year: "2007"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 95,
    plot:
      "A young Shakespeare, out of ideas and short of cash, meets his ideal woman and is inspired to write one of his most famous plays.",
    rating: "R",
    title: "Shakespeare in Love",
    year: "1998"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 96,
    plot:
      "Armed with a license to kill, Secret Agent James Bond sets out on his first mission as 007 and must defeat a weapons dealer in a high stakes game of poker at Casino Royale, but things are not what they seem.",
    rating: "PG-13",
    title: "Casino Royale",
    year: "2006"
  },
  {
    copies: "",
    genre: "Drama, Fantasy, Mystery",
    id: 97,
    plot:
      "In a society where humans and vampires co-exist, set in the small town of Bon Temps, Louisiana, Sookie Stackhouse is a young woman who may have found a perfect boyfriend. Sookie is ...",
    rating: "TV-MA",
    title: "Strange Love",
    year: "2008"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Sci-Fi",
    id: 98,
    plot:
      "In the midst of the Gulf War, soldiers are kidnapped and brainwashed for sinister purposes.",
    rating: "R",
    title: "The Manchurian Candidate",
    year: "2004"
  },
  {
    copies: "",
    genre: "Drama",
    id: 99,
    plot:
      "Disturbed Blanche DuBois moves in with her sister in New Orleans and is tormented by her brutish brother-in-law while her reality crumbles around her.",
    rating: "PG",
    title: "A Streetcar Named Desire",
    year: "1951"
  },
  {
    copies: "",
    genre: "Western",
    id: 100,
    plot:
      "Two bounty hunters with the same intentions, team up to track down a Western outlaw.",
    rating: "Approved",
    title: "For a Few Dollars More",
    year: "1965"
  },
  {
    copies: "",
    genre: "Drama, Music",
    id: 101,
    plot:
      "A young man from the South Bronx dreams of making it as a rapper, until a run-in with local thugs forces him to hide in Puerto Rico with the father he never knew.",
    rating: "PG-13",
    title: "Feel the Noise",
    year: "2007"
  },
  {
    copies: "",
    genre: "Horror",
    id: 102,
    plot:
      "Tony Washington is killed by a gang of rampant trendy teenagers. Molly Mokembe is a voodoo lady who brings him back from the dead to seek revenge on his killers so he can rest in peace.",
    rating: "R",
    title: "Zombie Nightmare",
    year: "1987"
  },
  {
    copies: "",
    genre: "Adventure, Comedy",
    id: 103,
    plot:
      "A comedic satire of films that are large in scope, reputation and popularity",
    rating: "PG-13",
    title: "Epic Movie",
    year: "2007"
  },
  {
    copies: "",
    genre: "Drama, Fantasy, Mystery",
    id: 104,
    plot:
      "With Jason in jail for Amy's murder, he tries to prove his innocence, while Sookie thinks that the killer is someone that they are close with. Meanwhile, Maryann bails Tara out of jail and ...",
    rating: "TV-MA",
    title: "You'll Be the Death of Me",
    year: "2008"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 105,
    plot:
      "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel while succumbing to greed.",
    rating: "R",
    title: "Scarface",
    year: "1983"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 106,
    plot: "N/A",
    rating: "N/A",
    title: "Keloglan vs. the Black Prince",
    year: "2006"
  },
  {
    copies: "",
    genre: "Horror",
    id: 107,
    plot:
      "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
    rating: "Not Rated",
    title: "Manos: The Hands of Fate",
    year: "1966"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 108,
    plot:
      "Comedic tale of company workers who hate their jobs and decide to rebel against their greedy boss.",
    rating: "R",
    title: "Office Space",
    year: "1999"
  },
  {
    copies: "",
    genre: "Adventure, Comedy, Sci-Fi",
    id: 109,
    plot:
      "A teenager is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
    rating: "PG",
    title: "Back to the Future",
    year: "1985"
  },
  {
    copies: "",
    genre: "Comedy, Fantasy",
    id: 110,
    plot:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    rating: "PG",
    title: "Beetlejuice",
    year: "1988"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 111,
    plot:
      "Terrence Malick's adaptation of James Jones' autobiographical 1962 novel, focusing on the conflict at Guadalcanal during the second World War.",
    rating: "R",
    title: "The Thin Red Line",
    year: "1998"
  },
  {
    copies: "",
    genre: "Drama, History, War",
    id: 112,
    plot:
      "The poet Missak Manouchian leads a mixed bag of youngsters and immigrants in a clandestine battle against the Nazi occupation. Twenty-two men and one woman fighting for an ideal and for ...",
    rating: "N/A",
    title: "Army of Crime",
    year: "2009"
  },
  {
    copies: "",
    genre: "Adventure, Drama, History",
    id: 113,
    plot:
      "Allied P.O.W.s plan for several hundred of their number to escape from a German camp during World War II.",
    rating: "Unrated",
    title: "The Great Escape",
    year: "1963"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 114,
    plot:
      "The rivalry between two magicians becomes more exacerbated by their attempt to perform the ultimate illusion.",
    rating: "PG-13",
    title: "The Prestige",
    year: "2006"
  },
  {
    copies: "",
    genre: "Drama, Romance, Thriller",
    id: 115,
    plot:
      'A Mumbai teen who grew up in the slums, becomes a contestant on the Indian version of "Who Wants To Be A Millionaire?" He is arrested under suspicion of cheating, and while being interrogated, events from his life history are shown which explain why he knows the answers.',
    rating: "R",
    title: "Slumdog Millionaire",
    year: "2008"
  },
  {
    copies: "",
    genre: "Mystery, Thriller",
    id: 116,
    plot:
      "A murder inside the Louvre and clues in Da Vinci paintings lead to the discovery of a religious mystery protected by a secret society for two thousand years -- which could shake the foundations of Christianity.",
    rating: "PG-13",
    title: "The Da Vinci Code",
    year: "2006"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Family",
    id: 117,
    plot:
      "When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    rating: "PG",
    title: "Howl's Moving Castle",
    year: "2004"
  },
  {
    copies: "",
    genre: "Horror",
    id: 118,
    plot:
      "A father's psychic abilities are put to the test when his two daughters are trapped inside of a corn maze haunted by the spirits of two young girls who disappeared a year earlier.",
    rating: "R",
    title: "The Maize: The Movie",
    year: "2004"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 119,
    plot:
      "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
    rating: "PG",
    title: "Ice Age",
    year: "2002"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 120,
    plot:
      "A boy who communicates with spirits that don't know they're dead seeks the help of a disheartened child psychologist.",
    rating: "PG-13",
    title: "The Sixth Sense",
    year: "1999"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 121,
    plot:
      "Recent college graduate Benjamin Braddock is trapped into an affair with Mrs. Robinson, who happens to be the wife of his father's business partner and then finds himself falling in love with her daughter, Elaine.",
    rating: "Approved",
    title: "The Graduate",
    year: "1967"
  },
  {
    copies: "",
    genre: "Adventure, Comedy, Family",
    id: 122,
    plot:
      "A classic fairy tale, with swordplay, giants, an evil prince, a beautiful princess, and yes, some kissing (as read by a kindly grandfather).",
    rating: "PG",
    title: "The Princess Bride",
    year: "1987"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi",
    id: 123,
    plot:
      "When an alien force tries to invade Earth to steal a powerful new rocket fuel, a mysterious hero intervenes.",
    rating: "N/A",
    title: "Prince of Space",
    year: "1959"
  },
  {
    copies: "",
    genre: "Action, Adventure, Thriller",
    id: 124,
    plot:
      "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
    rating: "PG-13",
    title: "Mission: Impossible",
    year: "1996"
  },
  {
    copies: "",
    genre: "Drama, Family, Fantasy",
    id: 125,
    plot:
      "An angel helps a compassionate but despairingly frustrated businessman by showing what life would have been like if he never existed.",
    rating: "Approved",
    title: "It's a Wonderful Life",
    year: "1946"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 126,
    plot:
      "Fred Dobbs and Bob Curtin, two Americans searching for work in Mexico, convince an old prospector to help them mine for gold in the Sierra Madre Mountains.",
    rating: "TV-PG",
    title: "The Treasure of the Sierra Madre",
    year: "1948"
  },
  {
    copies: "",
    genre: "Sci-Fi",
    id: 127,
    plot: "A young boy in the woods discovers a lovable alien...or is it?",
    rating: "N/A",
    title: "The Pod People",
    year: "1983"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 128,
    plot:
      'Two young men strangle their "inferior" classmate, hide his body in their apartment, and invite his friends and family to a dinner party as a means to challenge the "perfection" of their crime.',
    rating: "PG",
    title: "Rope",
    year: "1948"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 129,
    plot:
      "Chance, a simple gardener, has never left the estate until his employer dies. His simple TV-informed utterances are mistaken for profundity.",
    rating: "PG",
    title: "Being There",
    year: "1979"
  },
  {
    copies: "",
    genre: "Biography, Drama, Romance",
    id: 130,
    plot:
      "Young, wild poet Arthur Rimbaud and his mentor Paul Verlaine engage in a fierce, forbidden romance while feeling the effects of a hellish artistic lifestyle.",
    rating: "R",
    title: "Total Eclipse",
    year: "1995"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 131,
    plot:
      "Over the course of one evening, an unsuspecting group of twenty-somethings find themselves bombarded by a series of natural disasters and catastrophic events.",
    rating: "PG-13",
    title: "Disaster Movie",
    year: "2008"
  },
  {
    copies: "",
    genre: "Romance",
    id: 132,
    plot:
      "Two young people stand on a street corner in a run-down part of New York, kissing. Despite the lawlessness of the district they are left unmolested. A short distance away walk Maria and ...",
    rating: "N/A",
    title: "A Story About Love",
    year: "1995"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 133,
    plot:
      "In this lighthearted romance from Victorian novelist Thomas Hardy, the beautiful new village school teacher is pursued by three suitors: a working-class man, a landowner, and the vicar.",
    rating: "N/A",
    title: "Under the Greenwood Tree",
    year: "2005"
  },
  {
    copies: "",
    genre: "Biography, Drama, Music",
    id: 134,
    plot:
      "A biography of Hildegard Knef, one of Germany's biggest post-war stars.",
    rating: "N/A",
    title: "Hilde",
    year: "2009"
  },
  {
    copies: "",
    genre: "Crime, Drama, Sci-Fi",
    id: 135,
    plot:
      "In future Britain, charismatic delinquent Alex DeLarge is jailed and volunteers for an experimental aversion therapy developed by the government in an effort to solve society's crime problem - but not all goes according to plan.",
    rating: "X",
    title: "A Clockwork Orange",
    year: "1971"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 136,
    plot:
      "A mild-mannered man becomes a local hero through an act of violence, which sets off repercussions that will shake his family to its very core.",
    rating: "R",
    title: "A History of Violence",
    year: "2005"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 137,
    plot:
      "James Bond teams up with the lone survivor of a destroyed Russian research center to stop the hijacking of a nuclear space weapon by a fellow agent believed to be dead.",
    rating: "PG-13",
    title: "GoldenEye",
    year: "1995"
  },
  {
    copies: "",
    genre: "Action, Thriller",
    id: 138,
    plot:
      "Gritty neo-noir art film about escaped convict Griffin and his friends, who ran all the way to hell... with a penny, and a broken cigarette.",
    rating: "N/A",
    title: "Night Train to Mundo Fine",
    year: "1966"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Fantasy",
    id: 139,
    plot:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
    rating: "PG-13",
    title: "Princess Mononoke",
    year: "1997"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 140,
    plot:
      "A mysterious Hollywood stuntman, mechanic and getaway driver lands himself in trouble when he helps out his neighbor.",
    rating: "R",
    title: "Drive",
    year: "2011"
  },
  {
    copies: "",
    genre: "Comedy, Music, Romance",
    id: 141,
    plot:
      'A rap-oriented remake of "The Wild One", with heavy emphasis on the fact that rap star Vanilla Ice has assumed the Marlon Brando role.',
    rating: "PG",
    title: "Cool as Ice",
    year: "1991"
  },
  {
    copies: "",
    genre: "Action, Adventure",
    id: 142,
    plot:
      "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana Jones must follow in his father's footsteps and stop the Nazis.",
    rating: "PG-13",
    title: "Indiana Jones and the Last Crusade",
    year: "1989"
  },
  {
    copies: "",
    genre: "Documentary, Biography, Music",
    id: 143,
    plot: "A documentary on the life, music, and legacy of Bob Marley.",
    rating: "PG-13",
    title: "Marley",
    year: "2012"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi, Thriller",
    id: 144,
    plot:
      "Jobe is resuscitated by Jonathan Walker. He wants Jobe to create a special computer chip that would connect all the computers in the world into one network, which Walker would control and ...",
    rating: "PG-13",
    title: "Lawnmower Man 2: Beyond Cyberspace",
    year: "1996"
  },
  {
    copies: "",
    genre: "Adventure, Drama",
    id: 145,
    plot:
      "After the death of a friend, a writer recounts a boyhood journey to find the body of a missing boy.",
    rating: "R",
    title: "Stand by Me",
    year: "1986"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 146,
    plot: "A man refuses to conform to life in a rural prison.",
    rating: "PG",
    title: "Cool Hand Luke",
    year: "1967"
  },
  {
    copies: "",
    genre: "Comedy, Family",
    id: 147,
    plot: "N/A",
    rating: "N/A",
    title: "The Hottie",
    year: "2004"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 148,
    plot:
      "Wealthy San Francisco financier Nicholas Van Orton gets a strange birthday present from wayward brother Conrad: a live-action game that consumes his life.",
    rating: "R",
    title: "The Game",
    year: "1997"
  },
  {
    copies: "",
    genre: "Action, Adventure, Crime",
    id: 149,
    plot:
      "James Bond investigates the hijacking of British and Russian submarines carrying nuclear warheads with the help of a KGB agent whose lover he killed.",
    rating: "PG",
    title: "The Spy Who Loved Me",
    year: "1977"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 150,
    plot:
      "A man and a woman move in to neighboring Hong Kong apartments and form a bond when they both suspect their spouses of extramarital activities.",
    rating: "PG",
    title: "In the Mood for Love",
    year: "2000"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 151,
    plot:
      "A soldier from Earth crash-lands on an alien world after sustaining battle damage. Eventually he encounters another survivor, but from the enemy species he was fighting; they band together ...",
    rating: "PG-13",
    title: "Enemy Mine",
    year: "1985"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 152,
    plot:
      "A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with a special dagger that enables the magic sand inside to reverse time.",
    rating: "PG-13",
    title: "Prince of Persia: The Sands of Time",
    year: "2010"
  },
  {
    copies: "",
    genre: "Comedy, Drama",
    id: 153,
    plot:
      "A high school wise guy is determined to have a day off from school, despite of what the principal thinks of that.",
    rating: "PG-13",
    title: "Ferris Bueller's Day Off",
    year: "1986"
  },
  {
    copies: "",
    genre: "Adventure, Drama, History",
    id: 154,
    plot:
      "The story of the original Mercury 7 astronauts and their macho, seat-of-the-pants approach to the space program.",
    rating: "R",
    title: "The Right Stuff",
    year: "1983"
  },
  {
    copies: "",
    genre: "Mystery, Thriller",
    id: 155,
    plot:
      "Rex and Saskia, a young couple in love, are on vacation. They stop at a busy service station and Saskia is abducted. After three years and no sign of Saskia, Rex begins receiving letters from the abductor.",
    rating: "Unrated",
    title: "The Vanishing",
    year: "1988"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 156,
    plot:
      "A promising college athlete takes a turn for the worse when he hooks up with old highschool friends during his summer break.",
    rating: "R",
    title: "The Hillz",
    year: "2004"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Drama",
    id: 157,
    plot:
      "Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.",
    rating: "G",
    title: "The Lion King",
    year: "1994"
  },
  {
    copies: "",
    genre: "Crime, Film-Noir, Thriller",
    id: 158,
    plot: "Crooks plan and execute a daring race-track robbery.",
    rating: "Approved",
    title: "The Killing",
    year: "1956"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 159,
    plot:
      "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out, despite the allure of the drugs and influence of friends.",
    rating: "R",
    title: "Trainspotting",
    year: "1996"
  },
  {
    copies: "",
    genre: "Drama",
    id: 160,
    plot:
      "Will Hunting, a janitor at MIT, has a gift for mathematics but needs help from a psychologist to find direction in his life.",
    rating: "R",
    title: "Good Will Hunting",
    year: "1997"
  },
  {
    copies: "",
    genre: "Drama",
    id: 161,
    plot:
      "On an isolated lake, an old monk lives on a small floating temple. The wise master has also a young boy with him who learns to become a monk. And we watch as seasons and years pass by.",
    rating: "R",
    title: "Spring, Summer, Fall, Winter... and Spring",
    year: "2003"
  },
  {
    copies: "",
    genre: "Comedy, Crime, Drama",
    id: 162,
    plot:
      "In 1930s Chicago, a young con man seeking revenge for his murdered partner teams up with a master of the big con to win a fortune from a criminal banker.",
    rating: "PG",
    title: "The Sting",
    year: "1973"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 163,
    plot:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    rating: "PG-13",
    title: "The Lord of the Rings: The Return of the King",
    year: "2003"
  },
  {
    copies: "",
    genre: "Horror, Mystery, Sci-Fi",
    id: 164,
    plot:
      "Scientists in the Antarctic are confronted by a shape-shifting alien that assumes the appearance of the people that it kills.",
    rating: "R",
    title: "The Thing",
    year: "1982"
  },
  {
    copies: "",
    genre: "Comedy, Drama",
    id: 165,
    plot:
      "Brooks Wilson is in crisis. He is torn between his wife Selma and two daughters and his mistress Grace, and also between his career as a successful illustrator and his feeling that he might...",
    rating: "R",
    title: "Loving",
    year: "1970"
  },
  {
    copies: "",
    genre: "Horror",
    id: 166,
    plot:
      "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
    rating: "R",
    title: "The Shining",
    year: "1980"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 167,
    plot:
      "A meek hobbit of The Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
    rating: "PG-13",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: "2001"
  },
  {
    copies: "",
    genre: "Horror",
    id: 168,
    plot:
      "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    rating: "X",
    title: "Friday the 13th",
    year: "1980"
  },
  {
    copies: "",
    genre: "Drama, History, Thriller",
    id: 169,
    plot:
      "Based on the true story of the Black September aftermath, about the five men chosen to eliminate the ones responsible for that fateful day.",
    rating: "R",
    title: "Munich",
    year: "2005"
  },
  {
    copies: "2",
    genre: "Drama, Fantasy, Horror",
    id: 170,
    plot:
      "A vampire tells his epic life story: love, betrayal, loneliness, and hunger. ",
    rating: "R",
    title: "Interview with the Vampire: The Vampire Chronicles",
    year: "1994"
  },
  {
    copies: "",
    genre: "Mystery, Thriller",
    id: 171,
    plot:
      "Stuart Shepard finds himself trapped in a phone booth, pinned down by an extortionist's sniper rifle.",
    rating: "R",
    title: "Phone Booth",
    year: "2002"
  },
  {
    copies: "",
    genre: "Mystery, Thriller",
    id: 172,
    plot:
      "A man who loves games and theater invites his wife's lover to meet him, setting up a battle of wits with potentially deadly results.",
    rating: "PG",
    title: "Sleuth",
    year: "1972"
  },
  {
    copies: "",
    genre: "Drama, Fantasy, War",
    id: 173,
    plot:
      "In the fascist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    rating: "R",
    title: "Pan's Labyrinth",
    year: "2006"
  },
  {
    copies: "",
    genre: "Adventure, Comedy, Family",
    id: 174,
    plot:
      "The Tramp goes to the Klondike in search of gold and finds it and more.",
    rating: "Not Rated",
    title: "The Gold Rush",
    year: "1925"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 175,
    plot:
      "A video game villain wants to be a hero and sets out to fulfill his dream, but his quest brings havoc to the whole arcade where he lives.",
    rating: "PG",
    title: "Wreck-It Ralph",
    year: "2012"
  },
  {
    copies: "",
    genre: "Horror, Musical",
    id: 176,
    plot:
      "Sea creatures created from radioactive sludge terrorize a beach community.",
    rating: "Approved",
    title: "The Horror of Party Beach",
    year: "1964"
  },
  {
    copies: "",
    genre: "Adventure, Drama, Fantasy",
    id: 177,
    plot:
      "A son tries to learn more about his dying father by reliving stories and myths he told about his life.",
    rating: "PG-13",
    title: "Big Fish",
    year: "2003"
  },
  {
    copies: "",
    genre: "Drama, History, War",
    id: 178,
    plot:
      "A ruthlessly ambitious Scottish lord siezes the throne with the help of his scheming wife and a trio of witches.",
    rating: "R",
    title: "Macbeth",
    year: "1971"
  },
  {
    copies: "",
    genre: "Drama",
    id: 179,
    plot:
      "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
    rating: "R",
    title: "Crash",
    year: "2004"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi",
    id: 180,
    plot:
      "After enslavement & near extermination by an alien race in the year 3000, humanity begins to fight back.",
    rating: "PG-13",
    title: "Battlefield Earth",
    year: "2000"
  },
  {
    copies: "",
    genre: "Adventure, Fantasy",
    id: 181,
    plot:
      "Teenagers stumble across a prehistoric caveman, who goes on a rampage.",
    rating: "Unrated",
    title: "Eegah",
    year: "1962"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Fantasy",
    id: 182,
    plot:
      "A puppeteer discovers a portal that leads literally into the head of the movie star, John Malkovich.",
    rating: "R",
    title: "Being John Malkovich",
    year: "1999"
  },
  {
    copies: "",
    genre: "Drama",
    id: 183,
    plot:
      "An eight year old boy is thought to be lazy and a troublemaker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    rating: "PG",
    title: "Like Stars on Earth",
    year: "2007"
  },
  {
    copies: "",
    genre: "Action, Horror, Thriller",
    id: 184,
    plot:
      "A marine biologist, a dolphin trainer, a research scientist, and a local sheriff try to hunt down a large sea monster, a shark/octopus hybrid, that is devouring swimmers and fishermen off a south Florida coast.",
    rating: "R",
    title: "Devil Fish",
    year: "1984"
  },
  {
    copies: "",
    genre: "Biography, Drama, History",
    id: 185,
    plot:
      "The story of King George VI of the United Kingdom of Great Britain and Northern Ireland, his impromptu ascension to the throne and the speech therapist who helped the unsure monarch become worthy of it.",
    rating: "R",
    title: "The King's Speech",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 186,
    plot:
      "A poor Midwest family is forced off of their land. They travel to California, suffering the misfortunes of the homeless in the Great Depression.",
    rating: "Not Rated",
    title: "The Grapes of Wrath",
    year: "1940"
  },
  {
    copies: "",
    genre: "Western",
    id: 187,
    plot:
      'An aging group of outlaws look for one last big score as the "traditional" American West is disappearing around them.',
    rating: "R",
    title: "The Wild Bunch",
    year: "1969"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 188,
    plot:
      "After rescuing Han Solo from the palace of Jabba the Hutt, the Rebels attempt to destroy the Second Death Star, while Luke Skywalker tries to bring his father back to the Light Side of the Force.",
    rating: "PG",
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: "1983"
  },
  {
    copies: "",
    genre: "Comedy, Crime, Romance",
    id: 189,
    plot:
      "The violent story about how a criminal lesbian, a tough-guy hit-man with a heart of gold, and a mentally challenged man came to be best friends through a hostage.",
    rating: "R",
    title: "Gigli",
    year: "2003"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 190,
    plot:
      "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.",
    rating: "R",
    title: "The Godfather: Part II",
    year: "1974"
  },
  {
    copies: "",
    genre: "Action, Drama",
    id: 191,
    plot:
      "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
    rating: "Unrated",
    title: "Seven Samurai",
    year: "1954"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 192,
    plot:
      '"Dude" Lebowski, mistaken for a millionaire Lebowski, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.',
    rating: "R",
    title: "The Big Lebowski",
    year: "1998"
  },
  {
    copies: "",
    genre: "Adventure, Drama, Fantasy",
    id: 193,
    plot:
      "A young man who survives a disaster at sea is hurtled into an epic journey of adventure and discovery. While cast away, he forms an unexpected connection with another survivor: a fearsome Bengal tiger.",
    rating: "PG",
    title: "Life of Pi",
    year: "2012"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 194,
    plot:
      "In the midst of trying to legitimize his business dealings in 1979 New York and Italy, aging mafia don Michael Corleone seeks to vow for his sins while taking a young protÃ©gÃ© under his wing.",
    rating: "R",
    title: "The Godfather: Part III",
    year: "1990"
  },
  {
    copies: "",
    genre: "Adventure, Drama, War",
    id: 195,
    plot:
      "After settling his differences with a Japanese PoW camp commander, a British colonel co-operates to oversee his men's construction of a railway bridge for their captors - while oblivious to a plan by the Allies to destroy it.",
    rating: "PG",
    title: "The Bridge on the River Kwai",
    year: "1957"
  },
  {
    copies: "",
    genre: "Biography, Drama, History",
    id: 196,
    plot:
      "Biography of Mohandas K. Gandhi, the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
    rating: "PG",
    title: "Gandhi",
    year: "1982"
  },
  {
    copies: "",
    genre: "Action, Adventure",
    id: 197,
    plot:
      "Archeologist and adventurer Indiana Jones is hired by the US government to find the Ark of the Covenant before the Nazis.",
    rating: "PG",
    title: "Raiders of the Lost Ark",
    year: "1981"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 198,
    plot:
      "title character Sebastian Stark is an L.A. hot-shot lawyer, who leaves his lucrative career as defender of rich criminals to join the public prosecution under the District Attorney (D.A.), ...",
    rating: "N/A",
    title: "Shark",
    year: "2006"
  },
  {
    copies: "",
    genre: "Action, Horror",
    id: 199,
    plot:
      "Based on the video game, Alone in the Dark focuses on Edward Carnby, a detective of the paranormal, who slowly unravels a mysterious events with deadly results.",
    rating: "R",
    title: "Alone in the Dark",
    year: "2005"
  },
  {
    copies: "",
    genre: "Crime, Drama, Musical",
    id: 200,
    plot:
      "An east European girl goes to America with her young son, expecting it to be like a Hollywood film.",
    rating: "R",
    title: "Dancer in the Dark",
    year: "2000"
  },
  {
    copies: "",
    genre: "Biography, Drama",
    id: 201,
    plot:
      "A teenager with a massive facial skull deformity and biker gang mother attempts to live as normal a life as possible under the circumstances.",
    rating: "R",
    title: "Mask",
    year: "1985"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 202,
    plot:
      "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful, time-traveling Romulan creates black holes to destroy the Federation one planet at a time.",
    rating: "PG-13",
    title: "Star Trek",
    year: "2009"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 203,
    plot:
      "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
    rating: "PG",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980"
  },
  {
    copies: "2",
    genre: "Animation, Adventure, Family ",
    id: 204,
    plot:
      "Little Jack is a young fox living happily with his family in the woods, but everything changes when his father is captured by a circus troupe in order to be part of their show. The rest of the animals from the wood will share the same destiny. With the help from a nature-loving disabled boy in a wheelchair and a young acrobat girl, Little Jack will try to rescue the animals. ",
    rating: "G",
    title: "A Fox'sTale",
    year: "2008"
  },
  {
    copies: "",
    genre: "Adventure, Comedy, Family",
    id: 205,
    plot:
      'Tim Avery, an aspiring cartoonist, finds himself in a predicament when his dog stumbles upon the mask of Loki. Then after conceiving an infant son "born of the mask", he discovers just how looney child raising can be.',
    rating: "PG",
    title: "Son of the Mask",
    year: "2005"
  },
  {
    copies: "",
    genre: "Adventure, Sci-Fi",
    id: 206,
    plot:
      "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
    rating: "PG-13",
    title: "Jurassic Park",
    year: "1993"
  },
  {
    copies: "",
    genre: "Drama",
    id: 207,
    plot:
      "A television network cynically exploits a deranged former anchor's ravings and revelations about the news media for its own profit.",
    rating: "R",
    title: "Network",
    year: "1976"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 208,
    plot:
      "An idiotic man struggles to make it through life on his own in St. Louis.",
    rating: "R",
    title: "The Jerk",
    year: "1979"
  },
  {
    copies: "",
    genre: "Comedy, Sci-Fi",
    id: 209,
    plot:
      "A streetwise NYPD detective joins a secret organization that polices extraterrestrial affairs on Earth.",
    rating: "PG-13",
    title: "Men in Black",
    year: "1997"
  },
  {
    copies: "",
    genre: "Adventure, Comedy, Fantasy",
    id: 210,
    plot:
      "King Arthur and his knights embark on a low-budget search for the Grail, encountering many very silly obstacles.",
    rating: "PG",
    title: "Monty Python and the Holy Grail",
    year: "1975"
  },
  {
    copies: "",
    genre: "Drama",
    id: 211,
    plot:
      "ANNE B. REAL is the coming of age story of a young female rapper, who finds her inspiration by reading the Diary of Anne Frank.",
    rating: "PG-13",
    title: "Anne B. Real",
    year: "2003"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 212,
    plot:
      "A Jewish man has a wonderful romance with the help of his humour, but must use that same quality to protect his son in a Nazi death camp.",
    rating: "PG-13",
    title: "Life Is Beautiful",
    year: "1997"
  },
  {
    copies: "",
    genre: "Crime, Film-Noir, Thriller",
    id: 213,
    plot:
      "A stark, perverse story of murder, kidnapping, and police corruption in a Mexican border town.",
    rating: "PG-13",
    title: "Touch of Evil",
    year: "1958"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 214,
    plot:
      "Neurotic New York comedian Alvy Singer falls in love with the ditsy Annie Hall.",
    rating: "PG",
    title: "Annie Hall",
    year: "1977"
  },
  {
    copies: "",
    genre: "Crime, Action, Drama",
    id: 215,
    plot:
      "A sleazy, incompetent detective tries to simultaneously take down heroin dealers and a socialite who murdered a burglar.",
    rating: "R",
    title: "Mitchell",
    year: "1975"
  },
  {
    copies: "",
    genre: "Drama, Fantasy",
    id: 216,
    plot:
      "A man seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
    rating: "Not Rated",
    title: "The Seventh Seal",
    year: "1957"
  },
  {
    copies: "",
    genre: "Comedy, Drama",
    id: 217,
    plot:
      "Henry has been acting the human chameleon all his life - a pale reflection of other people's expectations. One day Henry's best friend Jon talks him into opening a restaurant with him in ...",
    rating: "N/A",
    title: "Original",
    year: "2009"
  },
  {
    copies: "",
    genre: "Biography, Drama, History",
    id: 218,
    plot:
      "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
    rating: "R",
    title: "Downfall",
    year: "2004"
  },
  {
    copies: "",
    genre: "Comedy, Romance, Sport",
    id: 219,
    plot:
      "Regina, the once popular girl has to make new friends at her new, conservative school. Problems arrive when she becomes enemies with LÃ­via, the school's queen bee, and falls in love with ...",
    rating: "N/A",
    title: "Dream Well",
    year: "2009"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 220,
    plot:
      "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    rating: "PG-13",
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    year: "2003"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 221,
    plot:
      "Chaos ensues when a man tries to expose a dark secret regarding a recently deceased patriarch of a dysfunctional British family.",
    rating: "R",
    title: "Death at a Funeral",
    year: "2007"
  },
  {
    copies: "",
    genre: "Action, Adventure, Comedy",
    id: 222,
    plot:
      "When Union spies steal an engineer's beloved locomotive, he pursues it single handedly and straight through enemy lines.",
    rating: "Unrated",
    title: "The General",
    year: "1926"
  },
  {
    copies: "",
    genre: "Action, Thriller",
    id: 223,
    plot:
      "Bond's loyalty to M is tested when her past comes back to haunt her. Whilst MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    rating: "PG-13",
    title: "Skyfall",
    year: "2012"
  },
  {
    copies: "",
    genre: "Drama, Thriller",
    id: 224,
    plot:
      "A young girl is recruited from the bottom rung of society into a ruthless world where power can get you anything.",
    rating: "N/A",
    title: "Call Girl",
    year: "2012"
  },
  {
    copies: "",
    genre: "Animation, Comedy, Drama",
    id: 225,
    plot:
      "An animated retelling of Charles Dickens' classic novel about a Victorian-era miser taken on a journey of self-redemption, courtesy of several mysterious Christmas apparitions.",
    rating: "PG",
    title: "A Christmas Carol",
    year: "2009"
  },
  {
    copies: "",
    genre: "Drama, History",
    id: 226,
    plot:
      "A chronicle of the events that led to the founding of the Chinese Communist Party.",
    rating: "N/A",
    title: "Beginning of the Great Revival",
    year: "2011"
  },
  {
    copies: "",
    genre: "Drama",
    id: 227,
    plot:
      "Erik is expelled from school for fighting. He ends up at a private boarding school where the senior students control the young ones. Erik finds a friend in Pierre, his room mate. The story ...",
    rating: "Not Rated",
    title: "Evil",
    year: "2003"
  },
  {
    copies: "",
    genre: "Biography, Drama, Sport",
    id: 228,
    plot:
      "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    rating: "PG-13",
    title: "Moneyball",
    year: "2011"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 229,
    plot:
      "Hannibal returns to America and attempts to make contact with disgraced Agent Starling and survive a vengeful victim's plan.",
    rating: "R",
    title: "Hannibal",
    year: "2001"
  },
  {
    copies: "",
    genre: "Biography, Drama, Sport",
    id: 230,
    plot:
      "An emotionally self-destructive boxer's journey through life, as the violence and temper that leads him to the top in the ring, destroys his life outside it.",
    rating: "R",
    title: "Raging Bull",
    year: "1980"
  },
  {
    copies: "",
    genre: "Comedy, Sport",
    id: 231,
    plot:
      "A rag-tag bunch of seniors, complete outsiders at their surf-crazed Laguna Beach High School, decide to crash the biggest team surf contest. In order to prevail, however, they must do one ...",
    rating: "R",
    title: "Surf School",
    year: "2006"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 232,
    plot:
      "As corruption grows in 1950s LA, three policemen - the straight-laced, the brutal, and the sleazy - investigate a series of murders with their own brand of justice.",
    rating: "R",
    title: "L.A. Confidential",
    year: "1997"
  },
  {
    copies: "",
    genre: null,
    id: 233,
    plot: null,
    rating: "R",
    title: "LÃ©on: The Professional",
    year: "1994"
  },
  {
    copies: "",
    genre: "Action, Horror, Sci-Fi",
    id: 234,
    plot:
      "A special military unit fights a powerful, out-of-control supercomputer and hundreds of scientists who have mutated into flesh-eating creatures after a laboratory accident.",
    rating: "R",
    title: "Resident Evil",
    year: "2002"
  },
  {
    copies: "",
    genre: "Drama, Fantasy, Thriller",
    id: 235,
    plot:
      "DD is a smug fellow, almost 30 years of age, who can manage all by himself. At least that's what he thinks. However, a strange woman - Lova - enters his life, hunted by evil men who want to...",
    rating: "N/A",
    title: "Storm",
    year: "2005"
  },
  {
    copies: "",
    genre: "Drama",
    id: 236,
    plot:
      "The drug-induced utopias of four Coney Island people are shattered when their addictions become stronger.",
    rating: "R",
    title: "Requiem for a Dream",
    year: "2000"
  },
  {
    copies: "4",
    genre: "Drama, Film-Noir, Thriller ",
    id: 237,
    plot:
      "In this Americanization of the 1931 German thriller, both the police and the criminal underworld stalk a mysterious killer who preys on small children. ",
    rating: "Not Rated",
    title: "M",
    year: "1951"
  },
  {
    copies: "",
    genre: "Drama",
    id: 238,
    plot:
      "1973, suburban Connecticut: middle class families experimenting with casual sex, drink, etc., find their lives out of control.",
    rating: "R",
    title: "The Ice Storm",
    year: "1997"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 239,
    plot:
      "Jason Bourne dodges a ruthless CIA official and his agents from a new assassination program while searching for the origins of his life as a trained killer.",
    rating: "PG-13",
    title: "The Bourne Ultimatum",
    year: "2007"
  },
  {
    copies: "",
    genre: "Action, Biography, Drama",
    id: 240,
    plot:
      "A semi-biographical account of Yip Man, the first martial arts master to teach the Chinese martial art of Wing Chun.",
    rating: "R",
    title: "Ip Man",
    year: "2008"
  },
  {
    copies: "",
    genre: "Horror, Sci-Fi",
    id: 241,
    plot:
      "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.",
    rating: "R",
    title: "Alien",
    year: "1979"
  },
  {
    copies: "",
    genre: "Drama",
    id: 242,
    plot:
      "A married couple are faced with a difficult decision - to improve the life of their child by moving to another country or to stay in Iran and look after a deteriorating parent who has Alzheimer's disease.",
    rating: "PG-13",
    title: "A Separation",
    year: "2011"
  },
  {
    copies: "",
    genre: "Horror",
    id: 243,
    plot:
      "A psycho cop with a weakness for killing his female arrests gets what's coming to him when a pack of zombie women rise from their graves in order to get proper revenge.",
    rating: "R",
    title: "Zombie Nation",
    year: "2004"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 244,
    plot:
      "The incredibly spoiled and overprivileged students of Camden College are a backdrop for an unusual love triangle between a drug dealer, a virgin and a bisexual classmate.",
    rating: "R",
    title: "The Rules of Attraction",
    year: "2002"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 245,
    plot:
      "Brian is born on the original Christmas, in the stable next door. He spends his life being mistaken for a messiah.",
    rating: "R",
    title: "Life of Brian",
    year: "1979"
  },
  {
    copies: "",
    genre: "Action, Fantasy",
    id: 246,
    plot:
      "The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.",
    rating: "PG-13",
    title: "Batman",
    year: "1989"
  },
  {
    copies: "",
    genre: "Comedy, Crime, Drama",
    id: 247,
    plot:
      "Posing as a movie producer, a robber cons an entire village to help him rob a treasure-laden train.",
    rating: "N/A",
    title: "Tees Maar Khan",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 248,
    plot:
      "At Helge's 60th birthday party, some unpleasant family truths are revealed.",
    rating: "R",
    title: "The Celebration",
    year: "1998"
  },
  {
    copies: "4",
    genre: "Action, Adventure, Fantasy",
    id: 249,
    plot:
      "During the near end of the clone wars, Darth Sidious has revealed himself and is ready to execute the last part of his plan to rule the Galaxy. Sidious is ready for his new apprentice, Lord Vader, to step into action and kill the remaining Jedi. Vader, however, struggles to choose the dark side and save his wife or remain loyal to the Jedi order. ",
    rating: "PG-13",
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: "2005"
  },
  {
    copies: "",
    genre: "Drama, Romance, War",
    id: 250,
    plot:
      "A mill owner in the Sudetenland and his family's lives are changed as Europe heats up in 1938.",
    rating: "N/A",
    title: "Habermann",
    year: "2010"
  },
  {
    copies: "",
    genre: "Action, Adventure, Comedy",
    id: 251,
    plot:
      "Three young boys, Rocky, Colt and Tum Tum together with their neighbor girl, computer whiz Amanda are visiting Mega Mountain amusement park when it is invaded by an army of ninjas led by ...",
    rating: "PG",
    title: "3 Ninjas: High Noon at Mega Mountain",
    year: "1998"
  },
  {
    copies: "",
    genre: "Crime, Drama, Film-Noir",
    id: 252,
    plot:
      "A private detective takes on a case that involves him with three eccentric criminals, a gorgeous liar, and their quest for a priceless statuette.",
    rating: "Not Rated",
    title: "The Maltese Falcon",
    year: "1941"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 253,
    plot:
      "A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.",
    rating: "R",
    title: "Pretty Woman",
    year: "1990"
  },
  {
    copies: "",
    genre: "Action, Drama, War",
    id: 254,
    plot:
      "An elderly lord abdicates to his three sons, and the two corrupt ones turn against him.",
    rating: "R",
    title: "Ran",
    year: "1985"
  },
  {
    copies: "",
    genre: "Drama",
    id: 255,
    plot:
      "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
    rating: "R",
    title: "Rain Man",
    year: "1988"
  },
  {
    copies: "",
    genre: "Crime, Mystery, Thriller",
    id: 256,
    plot:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
    rating: "R",
    title: "Se7en",
    year: "1995"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 257,
    plot:
      "Leonard Vole is arrested on suspicion of murdering an elderly acquaintance. He employs an experienced but aging barrister as his defense attorney.",
    rating: "Approved",
    title: "Witness for the Prosecution",
    year: "1957"
  },
  {
    copies: "",
    genre: "Action, Drama, War",
    id: 258,
    plot:
      "A young recruit in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
    rating: "R",
    title: "Platoon",
    year: "1986"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 259,
    plot:
      'A ballet dancer wins the lead in "Swan Lake" and is perfect for the role of the delicate White Swan - Princess Odette - but slowly loses her mind as she becomes more and more like Odile, the Black Swan.',
    rating: "R",
    title: "Black Swan",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 260,
    plot:
      "A naive man is appointed to fill a vacancy in the US Senate. His plans promptly collide with political corruption, but he doesn't back down.",
    rating: "Not Rated",
    title: "Mr. Smith Goes to Washington",
    year: "1939"
  },
  {
    copies: "",
    genre: "Drama",
    id: 261,
    plot:
      "An Irish rogue wins the heart of a rich widow and assumes her dead husband's aristocratic position in 18th-century England.",
    rating: "PG",
    title: "Barry Lyndon",
    year: "1975"
  },
  {
    copies: "",
    genre: "Crime, Film-Noir, Thriller",
    id: 262,
    plot:
      "A psychotic socialite confronts a pro tennis star with a theory on how two complete strangers can get away with murder...a theory that he plans to implement.",
    rating: "PG",
    title: "Strangers on a Train",
    year: "1951"
  },
  {
    copies: "",
    genre: "Short, Action, Adventure",
    id: 263,
    plot:
      "A young twenty-something diver living in the Florida Keys discovers he has the power to breathe underwater.",
    rating: "N/A",
    title: "Aquaman",
    year: "2006"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 264,
    plot:
      "A man robs a bank to pay for his lover's operation; it turns into a hostage situation and a media circus.",
    rating: "R",
    title: "Dog Day Afternoon",
    year: "1975"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 265,
    plot:
      "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: "R",
    title: "Pulp Fiction",
    year: "1994"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 266,
    plot:
      "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    rating: "R",
    title: "No Country for Old Men",
    year: "2007"
  },
  {
    copies: "",
    genre: "Comedy, Family",
    id: 267,
    plot:
      "With his wife doing a book tour, a father of twelve must handle a new job and his unstable brood.",
    rating: "PG",
    title: "Cheaper by the Dozen",
    year: "2003"
  },
  {
    copies: "",
    genre: "Western",
    id: 268,
    plot:
      "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner and a young man.",
    rating: "R",
    title: "Unforgiven",
    year: "1992"
  },
  {
    copies: "",
    genre: "Biography, Crime, Drama",
    id: 269,
    plot:
      "A true story about Frank Abagnale Jr., who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
    rating: "PG-13",
    title: "Catch Me If You Can",
    year: "2002"
  },
  {
    copies: "",
    genre: "Adventure, Drama, Fantasy",
    id: 270,
    plot:
      "In a twist to the fairy tale, the Huntsman ordered to take Snow White into the woods to be killed winds up becoming her protector and mentor in a quest to vanquish the Evil Queen.",
    rating: "PG-13",
    title: "Snow White and the Huntsman",
    year: "2012"
  },
  {
    copies: "",
    genre: "Action, Comedy, Adventure",
    id: 271,
    plot:
      "The pointlessly named Batwoman and her bevy of Batmaidens fight evil and dance.",
    rating: "N/A",
    title: "The Wild World of Batwoman",
    year: "1966"
  },
  {
    copies: "",
    genre: "Drama, Western",
    id: 272,
    plot:
      "A marshall, personally compelled to face a returning deadly enemy, finds that his own town refuses to help him.",
    rating: "PG",
    title: "High Noon",
    year: "1952"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 273,
    plot:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    rating: "R",
    title: "The Shawshank Redemption",
    year: "1994"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 274,
    plot:
      "After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, N.A.S.A. recruits a misfit team of deep core drillers to save the planet.",
    rating: "PG-13",
    title: "Armageddon",
    year: "1998"
  },
  {
    copies: "",
    genre: "Action, Drama, Romance",
    id: 275,
    plot:
      "As students at the Navy's elite fighter weapons school compete to be best in the class, one daring young flyer learns a few things from a civilian instructor that are not taught in the classroom.",
    rating: "PG",
    title: "Top Gun",
    year: "1986"
  },
  {
    copies: "",
    genre: "Horror",
    id: 276,
    plot: "A young man meets a farm girl who is actually a witch.",
    rating: "PG",
    title: "The Touch of Satan",
    year: "1971"
  },
  {
    copies: "",
    genre: "Drama, History, War",
    id: 277,
    plot:
      "123 elite U.S. soldiers drop into Somalia to capture two top lieutenants of a renegade warlord and find themselves in a desperate battle with a large force of heavily-armed Somalis.",
    rating: "R",
    title: "Black Hawk Down",
    year: "2001"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 278,
    plot:
      "The life of a divorced television writer dating a teenage girl is further complicated when he falls in love with his best friend's mistress.",
    rating: "R",
    title: "Manhattan",
    year: "1979"
  },
  {
    copies: "",
    genre: "Crime, Thriller",
    id: 279,
    plot:
      "Danny Ocean and his eleven accomplices plan to rob three Las Vegas casinos simultaneously.",
    rating: "PG-13",
    title: "Ocean's Eleven",
    year: "2001"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 280,
    plot:
      "A heinous crime and its aftermath are recalled from differing points of view.",
    rating: "Unrated",
    title: "Rashomon",
    year: "1950"
  },
  {
    copies: "",
    genre: "Action, Drama, War",
    id: 281,
    plot:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    rating: "R",
    title: "Saving Private Ryan",
    year: "1998"
  },
  {
    copies: "",
    genre: "Action, Fantasy",
    id: 282,
    plot:
      "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
    rating: "PG-13",
    title: "Spider-Man",
    year: "2002"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Sci-Fi",
    id: 283,
    plot:
      "When a group of trespassing seniors swim in a pool containing alien cocoons, they find themselves energized with youthful vigour.",
    rating: "PG-13",
    title: "Cocoon",
    year: "1985"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 284,
    plot:
      "Balian of Ibelin travels to Jerusalem during the crusades of the 12th century, and there he finds himself as the defender of the city and its people.",
    rating: "R",
    title: "Kingdom of Heaven",
    year: "2005"
  },
  {
    copies: "",
    genre: "Biography, Crime, Drama",
    id: 285,
    plot:
      "A man befriends a fellow criminal as the two of them begin serving their sentence on a dreadful prison island, which inspires the man to plot his escape.",
    rating: "R",
    title: "Papillon",
    year: "1973"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 286,
    plot:
      "Low-budget film about a young man given a mystical medallion by an Aztec shaman, in order to become a puma-empowered champion like his father before him. In trying to initially locate the ...",
    rating: "N/A",
    title: "The Pumaman",
    year: "1980"
  },
  {
    copies: "",
    genre: "Action, Adventure, Mystery",
    id: 287,
    plot:
      "A skilled extractor is offered a chance to regain his old life as payment for a task considered to be impossible.",
    rating: "PG-13",
    title: "Inception",
    year: "2010"
  },
  {
    copies: "",
    genre: "Biography, Drama",
    id: 288,
    plot:
      "A Victorian surgeon rescues a heavily disfigured man who is mistreated while scraping a living as a side-show freak. Behind his monstrous facade, there is revealed a person of intelligence and sensitivity.",
    rating: "PG",
    title: "The Elephant Man",
    year: "1980"
  },
  {
    copies: "",
    genre: "Drama, Sci-Fi, Thriller",
    id: 289,
    plot:
      "In 2027, in a chaotic world in which women have become somehow infertile, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea.",
    rating: "R",
    title: "Children of Men",
    year: "2006"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 290,
    plot:
      "Follows the plot of Pulp Fiction, also parodying scenes from other movies.",
    rating: "R",
    title: "Plump Fiction",
    year: "1997"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 291,
    plot:
      "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
    rating: "R",
    title: "Chinatown",
    year: "1974"
  },
  {
    copies: "",
    genre: "Action, Thriller",
    id: 292,
    plot:
      "A veteran cop, Murtaugh, is partnered with a young suicidal cop, Riggs. Both having one thing in common; hating working in pairs. Now they must learn to work with one another to stop a gang of drug smugglers.",
    rating: "R",
    title: "Lethal Weapon",
    year: "1987"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 293,
    plot:
      "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
    rating: "PG",
    title: "How to Train Your Dragon",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 294,
    plot:
      "A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
    rating: "Not Rated",
    title: "12 Angry Men",
    year: "1957"
  },
  {
    copies: "",
    genre: "Comedy, Musical, Romance",
    id: 295,
    plot:
      "A silent film production company and cast make a difficult transition to sound.",
    rating: "Approved",
    title: "Singin' in the Rain",
    year: "1952"
  },
  {
    copies: "",
    genre: "Film-Noir, Mystery, Thriller",
    id: 296,
    plot:
      "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, black-market opportunist Harry Lime.",
    rating: "Not Rated",
    title: "The Third Man",
    year: "1949"
  },
  {
    copies: "",
    genre: "Drama, History, Romance",
    id: 297,
    plot:
      "Life of a Russian doctor/poet who, although married, falls for a political activist's wife and experiences hardships during the Bolshevik Revolution.",
    rating: "PG-13",
    title: "Doctor Zhivago",
    year: "1965"
  },
  {
    copies: "",
    genre: "Drama",
    id: 298,
    plot:
      "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
    rating: "R",
    title: "Gran Torino",
    year: "2008"
  },
  {
    copies: "",
    genre: "Action, Drama, History",
    id: 299,
    plot:
      "A defense officer, Nameless, was summoned by the King of Qin regarding his success of terminating three warriors.",
    rating: "PG-13",
    title: "Hero",
    year: "2002"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 300,
    plot:
      "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.",
    rating: "R",
    title: "American Psycho",
    year: "2000"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 301,
    plot: "Suburban priest falls in love with woman in wheelchair.",
    rating: "N/A",
    title: "Miffo",
    year: "2003"
  },
  {
    copies: "",
    genre: "Mystery, Romance, Thriller",
    id: 302,
    plot:
      "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
    rating: "Approved",
    title: "Vertigo",
    year: "1958"
  },
  {
    copies: "",
    genre: "Biography, Crime, Drama",
    id: 303,
    plot:
      "Greed, deception, money, power, and murder occur between two mobster best friends and a trophy wife over a gambling empire.",
    rating: "R",
    title: "Casino",
    year: "1995"
  },
  {
    copies: "",
    genre: "Drama",
    id: 304,
    plot:
      "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
    rating: "R",
    title: "Cinema Paradiso",
    year: "1988"
  },
  {
    copies: "",
    genre: "Action, Adventure, Comedy",
    id: 305,
    plot:
      "A young movie fan gets thrown into the movie world of his favourite action film character.",
    rating: "PG-13",
    title: "Last Action Hero",
    year: "1993"
  },
  {
    copies: "",
    genre: "Mystery, Thriller",
    id: 306,
    plot:
      "A man, suffering from short-term memory loss, uses notes and tattoos to hunt for the man he thinks killed his wife.",
    rating: "R",
    title: "Memento",
    year: "2000"
  },
  {
    copies: "",
    genre: "Sci-Fi, Horror",
    id: 307,
    plot:
      "A space capsule crash-lands, and the astronaut aboard disappears. Is there a connection between the missing man and the monster roaming the area?",
    rating: "TV-PG",
    title: "Monster a-Go Go",
    year: "1965"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 308,
    plot: "A gunslinger is embroiled in a war with a local drug runner.",
    rating: "R",
    title: "Desperado",
    year: "1995"
  },
  {
    copies: "",
    genre: "Horror, Mystery, Thriller",
    id: 309,
    plot:
      "A Phoenix secretary steals $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
    rating: "TV-14",
    title: "Psycho",
    year: "1960"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Sci-Fi",
    id: 310,
    plot:
      "A troubled teenager is plagued by visions of a large bunny rabbit that manipulates him to commit a series of crimes, after narrowly escaping a bizarre accident.",
    rating: "R",
    title: "Donnie Darko",
    year: "2001"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 311,
    plot:
      "Jerry Lundegaard's inept crime falls apart due to his and his henchmen's bungling and the persistent police work of the quite pregnant Marge Gunderson.",
    rating: "R",
    title: "Fargo",
    year: "1996"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 312,
    plot:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    rating: "G",
    title: "Finding Nemo",
    year: "2003"
  },
  {
    copies: "",
    genre: "Biography, Drama, History",
    id: 313,
    plot:
      "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1980.",
    rating: "R",
    title: "Argo",
    year: "2012"
  },
  {
    copies: "",
    genre: "Action, Adventure",
    id: 314,
    plot:
      "A crafty ronin comes to a town divided by two criminal gangs and decides to play them against each other to free the town.",
    rating: "Unrated",
    title: "Yojimbo",
    year: "1961"
  },
  {
    copies: "",
    genre: "Animation, Family, Fantasy",
    id: 315,
    plot:
      "When two girls move to the country to be near their ailing mother, they have adventures with the wonderous forest spirits who live nearby.",
    rating: "G",
    title: "My Neighbor Totoro",
    year: "1988"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 316,
    plot:
      "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
    rating: "PG-13",
    title: "Forrest Gump",
    year: "1994"
  },
  {
    copies: "",
    genre: "Drama",
    id: 317,
    plot:
      "An aspiring author during the civil rights movement of the 1960s decides to write a book detailing the African-American maids' point of view on the white families for which they work, and the hardships they go through on a daily basis.",
    rating: "PG-13",
    title: "The Help",
    year: "2011"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Drama",
    id: 318,
    plot:
      "By tying thousands of balloons to his home, 78-year-old Carl sets out to fulfill his lifelong dream to see the wilds of South America. Russell, a wilderness explorer 70 years younger, inadvertently becomes a stowaway.",
    rating: "PG",
    title: "Up",
    year: "2009"
  },
  {
    copies: "",
    genre: "Crime, Film-Noir, Mystery",
    id: 319,
    plot:
      "Private detective Philip Marlowe is hired by a rich family. Before the complex case is over, he's seen murder, blackmail, and what might be love.",
    rating: "Not Rated",
    title: "The Big Sleep",
    year: "1946"
  },
  {
    copies: "",
    genre: "Drama, Sci-Fi, Thriller",
    id: 320,
    plot:
      "A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    rating: "R",
    title: "Blade Runner",
    year: "1982"
  },
  {
    copies: "",
    genre: "Crime",
    id: 321,
    plot:
      "A young man who works at a nursing home uses the legendary Zodiac killer's M.O. to kill people who neglect their elderly relatives.",
    rating: "R",
    title: "Ulli Lommel's Zodiac Killer",
    year: "2005"
  },
  {
    copies: "",
    genre: "Horror, Sci-Fi, Thriller",
    id: 322,
    plot:
      "This high-tech, psychological thriller is set in the shadowy world of the Internet. Sondra Brummel is recovering from a skiing accident in her boyfriend's mansion, and accidently contacts a...",
    rating: "Unrated",
    title: ".com for Murder",
    year: "2002"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 323,
    plot:
      "With a childhood tragedy that overshadowed their lives, three men are reunited by circumstance when one loses a daughter.",
    rating: "R",
    title: "Mystic River",
    year: "2003"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 324,
    plot:
      "This film is about a man whose job is to deliver packages without asking any questions. Complications arise when he breaks those rules.",
    rating: "PG-13",
    title: "The Transporter",
    year: "2002"
  },
  {
    copies: "",
    genre: "Biography, Drama, Romance",
    id: 325,
    plot:
      "The three-year romance between 19th century poet John Keats and Fanny Brawne.",
    rating: "PG",
    title: "Bright Star",
    year: "2009"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 326,
    plot:
      "Jacob Katadreuffe lives mute with his mother, has no contact with his father who only works against him and wants to become a lawyer, at all costs.",
    rating: "R",
    title: "Character",
    year: "1997"
  },
  {
    copies: "",
    genre: "Drama, Sport",
    id: 327,
    plot:
      "A faded professional wrestler must retire, but finds his quest for a new life outside the ring a dispiriting struggle.",
    rating: "R",
    title: "The Wrestler",
    year: "2008"
  },
  {
    copies: "",
    genre: "Comedy, Family, Romance",
    id: 328,
    plot:
      "A teenage girl's life gets turned upside down when a new school friend turns out to be a pop star.",
    rating: "PG",
    title: "Popstar",
    year: "2005"
  },
  {
    copies: "",
    genre: "Drama, Sport",
    id: 329,
    plot:
      "An up-and-coming pool player plays a long-time champion in a single high-stakes match.",
    rating: "Unrated",
    title: "The Hustler",
    year: "1961"
  },
  {
    copies: "",
    genre: "Drama, Sport",
    id: 330,
    plot:
      "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision corner with his older brother.",
    rating: "PG-13",
    title: "Warrior",
    year: "2011"
  },
  {
    copies: "",
    genre: "Horror, Thriller",
    id: 331,
    plot:
      "A lonely boy becomes good friends with Ben, a rat. This rat is also the leader of a pack of vicious killer rats, killing lots of people.",
    rating: "PG",
    title: "Ben",
    year: "1972"
  },
  {
    copies: "",
    genre: "Adventure, Drama",
    id: 332,
    plot:
      "When a Jewish prince is betrayed and sent into slavery by a Roman friend, he regains his freedom and comes back for revenge.",
    rating: "TV-PG",
    title: "Ben-Hur",
    year: "1959"
  },
  {
    copies: "",
    genre: "Documentary",
    id: 333,
    plot: "",
    rating: "N/A",
    title: "Japan: Sword and the Chrysanthemum",
    year: "1988"
  },
  {
    copies: "2",
    genre: "Crime, Drama, Fantasy",
    id: 334,
    plot:
      "Jean-Baptiste Grenouille, born with a superior olfactory sense, creates the world's finest perfume. His work, however, takes a dark turn as he searches for the ultimate scent. ",
    rating: "R",
    title: "Perfume: The Story of a Murder",
    year: "2006"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 335,
    plot:
      "In a murder trial, the defendant says he suffered temporary insanity after the victim raped his wife. What is the truth, and will he win his case?",
    rating: "Unrated",
    title: "Anatomy of a Murder",
    year: "1959"
  },
  {
    copies: "2",
    genre: "Comedy, Crime, Fantasy",
    id: 336,
    plot:
      "Evil assassins want to kill Daniel Kublbock, the third runner up for the German Idols. ",
    rating: "Not Rated",
    title: "Daniel - Der Zauberer",
    year: "2004"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 337,
    plot:
      "A mentally unstable Vietnam war veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    rating: "R",
    title: "Taxi Driver",
    year: "1976"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 338,
    plot:
      "A defense attorney has a crisis of conscience when he represents a wealthy client who has a foolproof plan to beat the system.",
    rating: "R",
    title: "The Lincoln Lawyer",
    year: "2011"
  },
  {
    copies: "",
    genre: "Crime, Film-Noir, Thriller",
    id: 339,
    plot:
      "A religious fanatic marries a gullible widow whose young children are reluctant to tell him where their real daddy hid $10,000 he'd stolen in a robbery.",
    rating: "Approved",
    title: "The Night of the Hunter",
    year: "1955"
  },
  {
    copies: "",
    genre: "Horror, Romance, Thriller",
    id: 340,
    plot:
      "A platoon of eagles and vultures attacks the residents of a small town. Many people die. It's not known what caused the flying menace to attack. Two people manage to fight back, but will they survive Birdemic?",
    rating: "Not Rated",
    title: "Birdemic: Shock and Terror",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 341,
    plot:
      "A semi-autobiographical story about Dolan as a young homosexual at odds with his mother.",
    rating: "Not Rated",
    title: "I Killed My Mother",
    year: "2009"
  },
  {
    copies: "",
    genre: "Drama",
    id: 342,
    plot:
      "Two counterculture bikers travel from Los Angeles to New Orleans in search of America.",
    rating: "R",
    title: "Easy Rider",
    year: "1969"
  },
  {
    copies: "",
    genre: "Drama, Sci-Fi",
    id: 343,
    plot:
      "A guide leads two men through an area known as the Zone to find a room that grants wishes.",
    rating: "Not Rated",
    title: "Stalker",
    year: "1979"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi",
    id: 344,
    plot:
      "A human-looking indestructible cyborg is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.",
    rating: "R",
    title: "The Terminator",
    year: "1984"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 345,
    plot:
      "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
    rating: "R",
    title: "Gladiator",
    year: "2000"
  },
  {
    copies: "",
    genre: "Fantasy, Horror",
    id: 346,
    plot:
      'Four teenagers are killed in a car accident. Two of the teenagers refuse to go with "The Grim Reaper" and a race between life and death ensues!',
    rating: "R",
    title: "Soultaker",
    year: "1990"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 347,
    plot:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: "R",
    title: "The Godfather",
    year: "1972"
  },
  {
    copies: "",
    genre: "Adventure, Family, Fantasy",
    id: 348,
    plot:
      "It's Harry's third year at Hogwarts; not only does he have a new \"Defense Against the Dark Arts\" teacher, but there is also trouble brewing. Convicted murderer Sirius Black has escaped the Wizards' Prison and is coming after Harry.",
    rating: "PG",
    title: "Harry Potter and the Prisoner of Azkaban",
    year: "2004"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 349,
    plot:
      "Muscle-bound Ator and his mute Asian sidekick travel from the ends of the Earth to save his aged mentor from the evil mustachioed Zor.",
    rating: "PG",
    title: "The Blade Master",
    year: "1984"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 350,
    plot:
      "An arms dealer confronts the morality of his work as he is being chased by an Interpol agent.",
    rating: "R",
    title: "Lord of War",
    year: "2005"
  },
  {
    copies: "",
    genre: "Sci-Fi, Horror",
    id: 351,
    plot:
      "A newlywed sheriff tries to stop a shambling monster that has emerged from a spaceship to eat people.",
    rating: "N/A",
    title: "The Creeping Terror",
    year: "1964"
  },
  {
    copies: "",
    genre: "Action, Sport",
    id: 352,
    plot:
      "A naturally talented basketball player, Noah Cruise is determined to become a doctor using his basketball scholarship to UCLA pre-med, rather than succumb to the lure of former sports agent...",
    rating: "PG-13",
    title: "Crossover",
    year: "2006"
  },
  {
    copies: "",
    genre: "Horror",
    id: 353,
    plot: "N/A",
    rating: "N/A",
    title: "The Ghost Writer",
    year: "1990"
  },
  {
    copies: "",
    genre: "Biography, Drama, Thriller",
    id: 354,
    plot:
      "A man's coerced confession to an IRA bombing he did not commit results in the imprisonment of his father as well. An English lawyer fights to free them.",
    rating: "R",
    title: "In the Name of the Father",
    year: "1993"
  },
  {
    copies: "",
    genre: "Comedy, Drama, War",
    id: 355,
    plot:
      "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
    rating: "Approved",
    title: "The Great Dictator",
    year: "1940"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 356,
    plot:
      "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.",
    rating: "PG-13",
    title: "(500) Days of Summer",
    year: "2009"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 357,
    plot:
      "Arn, the son of a high-ranking Swedish nobleman is educated in a monastery and sent to the Holy Land as a knight templar to do penance for a forbidden love.",
    rating: "N/A",
    title: "Arn: The Knight Templar",
    year: "2007"
  },
  {
    copies: "",
    genre: "Crime, Thriller",
    id: 358,
    plot:
      "An ex-tennis pro carries out a plot to murder his wife. When things go wrong, he improvises a brilliant plan B.",
    rating: "PG",
    title: "Dial M for Murder",
    year: "1954"
  },
  {
    copies: "",
    genre: "Biography, Crime, Drama",
    id: 359,
    plot:
      "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
    rating: "R",
    title: "American Gangster",
    year: "2007"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 360,
    plot:
      "An in-depth examination of the way that the Vietnam war affects the lives of people in a small industrial town in the USA.",
    rating: "R",
    title: "The Deer Hunter",
    year: "1978"
  },
  {
    copies: "",
    genre: "Action, Adventure, Comedy",
    id: 361,
    plot: "N/A",
    rating: "N/A",
    title: "Yes Sir",
    year: "2007"
  },
  {
    copies: "",
    genre: "Drama",
    id: 362,
    plot:
      "A just-divorced man must learn to care for his son on his own, and then must fight in court to keep custody of him.",
    rating: "Approved",
    title: "Kramer vs. Kramer",
    year: "1979"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 363,
    plot:
      "In 1986, in the province of Gyunggi, in South Korea, a second young and beautiful woman is found dead, raped and tied and gagged with her underwear. Detective Park Doo-Man and Detective Cho...",
    rating: "Unrated",
    title: "Memories of Murder",
    year: "2003"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 364,
    plot:
      "An introvert freshman is taken under the wings of two seniors who welcome him to the real world.",
    rating: "PG-13",
    title: "The Perks of Being a Wallflower",
    year: "2012"
  },
  {
    copies: "",
    genre: "Drama, Horror, Musical",
    id: 365,
    plot:
      "The infamous story of Benjamin Barker, a.k.a Sweeney Todd, who sets up a barber shop down in London which is the basis for a sinister partnership with his fellow tenant, Mrs. Lovett. Based on the hit Broadway musical.",
    rating: "R",
    title: "Sweeney Todd: The Demon Barber of Fleet Street",
    year: "2007"
  },
  {
    copies: "",
    genre: "Music, Romance",
    id: 366,
    plot:
      "A young singer dates a disc jockey who helps her get into the music business, but their relationship become complicated as she ascends to super stardom.",
    rating: "PG-13",
    title: "Glitter",
    year: "2001"
  },
  {
    copies: "",
    genre: "Comedy, Crime, Family",
    id: 367,
    plot:
      "Scientist hold talking, super-intelligent babies captive, but things take a turn for the worse when a mix-up occurs between a baby genius and its twin.",
    rating: "PG",
    title: "Baby Geniuses",
    year: "1999"
  },
  {
    copies: "",
    genre: "Adventure, Comedy, Fantasy",
    id: 368,
    plot:
      "A spoof that combines Cast Away with Miss Congeniality, Planet of the Apes, Love Boat, Gilligan's Island, The Sixth Sense, Jurassic Park, and more",
    rating: "N/A",
    title: "Miss Castaway and the Island Girls",
    year: "2004"
  },
  {
    copies: "",
    genre: "Drama, Mystery, War",
    id: 369,
    plot:
      "Twins journey to the Middle East to discover their family history, and fulfill their mother's last wishes.",
    rating: "R",
    title: "Incendies",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 370,
    plot:
      "Rich and bored aristocrats in Rococo France play high-stakes games of passion and betrayal.",
    rating: "R",
    title: "Dangerous Liaisons",
    year: "1988"
  },
  {
    copies: "",
    genre: "Adventure, Sci-Fi, Thriller",
    id: 371,
    plot:
      "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games, a televised fight to the death in which two teenagers from each of the twelve Districts of Panem are chosen at random to compete.",
    rating: "PG-13",
    title: "The Hunger Games",
    year: "2012"
  },
  {
    copies: "",
    genre: "Western",
    id: 372,
    plot:
      "A wandering gunfighter plays two rival families against each other in a town torn apart by greed, pride, and revenge.",
    rating: "R",
    title: "A Fistful of Dollars",
    year: "1964"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 373,
    plot:
      "Six escaped convicts and their female hostage make a desperate run for the Mexican border, where they stumble across a lost treasure of untold wealth, and find certain death instead on the Arizona desert.",
    rating: "Unrated",
    title: "Seven Mummies",
    year: "2006"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 374,
    plot:
      "A account of underground resistance fighters in Nazi-occupied France.",
    rating: "Not Rated",
    title: "Army of Shadows",
    year: "1969"
  },
  {
    copies: "",
    genre: "Fantasy",
    id: 375,
    plot:
      'Two creepy "horror" films joined together by Merlin\'s Shop which is, in turn, introduced by a Grandpa telling the story.',
    rating: "Unrated",
    title: "Merlin's Shop of Mystical Wonders",
    year: "1996"
  },
  {
    copies: "",
    genre: "Biography, Drama",
    id: 376,
    plot:
      "In a Napoleonic era insane asylum, an inmate, the irrepressible Marquis De Sade, fights a battle of wills against a tyrannically prudish doctor.",
    rating: "R",
    title: "Quills",
    year: "2000"
  },
  {
    copies: "",
    genre: "Crime, Mystery, Thriller",
    id: 377,
    plot:
      "A boat has been destroyed, criminals are dead, and the key to this mystery lies with the only survivor and his twisted, convoluted story beginning with five career crooks in a seemingly random police lineup.",
    rating: "R",
    title: "The Usual Suspects",
    year: "1995"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 378,
    plot:
      "Incompetent cop Frank Drebin has to foil an attempt to assassinate Queen Elizabeth II.",
    rating: "PG-13",
    title: "The Naked Gun: From the Files of Police Squad!",
    year: "1988"
  },
  {
    copies: "",
    genre: "Biography, Drama, Romance",
    id: 379,
    plot:
      "True story of the lifelong romance between novelist Iris Murdoch and her husband John Bayley, from their student days through her battle with Alzheimer's disease.",
    rating: "R",
    title: "Iris",
    year: "2001"
  },
  {
    copies: "",
    genre: "Western",
    id: 380,
    plot:
      "A Civil War veteran embarks on a journey to rescue his niece from an Indian tribe.",
    rating: "Unrated",
    title: "The Searchers",
    year: "1956"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 381,
    plot:
      "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
    rating: "R",
    title: "The Secret in Their Eyes",
    year: "2009"
  },
  {
    copies: "",
    genre: "Adventure, Horror, Thriller",
    id: 382,
    plot:
      "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.",
    rating: "PG",
    title: "Jaws",
    year: "1975"
  },
  {
    copies: "",
    genre: "Comedy, Family, Fantasy",
    id: 383,
    plot:
      "After three centuries, three witch sisters are resurrected in Salem Massachusetts on Halloween night, and it is up to two teen-agers, a young girl, and an immortal cat to put an end to the witches' reign of terror once and for all.",
    rating: "PG",
    title: "Hocus Pocus",
    year: "1993"
  },
  {
    copies: "",
    genre: "Crime, Drama, History",
    id: 384,
    plot:
      "Federal Agent Eliot Ness sets out to stop Al Capone; because of rampant corruption, he assembles a small, hand-picked team.",
    rating: "R",
    title: "The Untouchables",
    year: "1987"
  },
  {
    copies: "",
    genre: "Crime, Mystery, Thriller",
    id: 385,
    plot:
      "A story between a mole in the police department and an undercover cop. Their objectives are the same: to find out who is the mole, and who is the cop.",
    rating: "R",
    title: "Infernal Affairs",
    year: "2002"
  },
  {
    copies: "",
    genre: "Adventure, Mystery, Sci-Fi",
    id: 386,
    plot:
      "A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.",
    rating: "R",
    title: "Prometheus",
    year: "2012"
  },
  {
    copies: "",
    genre: "Drama, Thriller",
    id: 387,
    plot:
      "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
    rating: "R",
    title: "The Lives of Others",
    year: "2006"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 388,
    plot:
      "A young American studying in Paris in 1968 strikes up a friendship with a French brother and sister. Set against the background of the '68 Paris student riots.",
    rating: "NC-17",
    title: "The Dreamers",
    year: "2003"
  },
  {
    copies: "",
    genre: "Drama, Fantasy, Romance",
    id: 389,
    plot:
      "An uncommonly gentle young man, who happens to have scissors for hands, falls in love with a beautiful adolescent girl.",
    rating: "PG-13",
    title: "Edward Scissorhands",
    year: "1990"
  },
  {
    copies: "",
    genre: "Action, Fantasy",
    id: 390,
    plot:
      "Nick Fury of S.H.I.E.L.D. assembles a team of superheroes to save the planet from Loki and his army.",
    rating: "PG-13",
    title: "The Avengers",
    year: "2012"
  },
  {
    copies: "",
    genre: "Drama, Sci-Fi",
    id: 391,
    plot:
      "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
    rating: "Not Rated",
    title: "Metropolis",
    year: "1927"
  },
  {
    copies: "",
    genre: "Crime, Drama, Thriller",
    id: 392,
    plot:
      "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
    rating: "R",
    title: "The Silence of the Lambs",
    year: "1991"
  },
  {
    copies: "",
    genre: "Drama",
    id: 393,
    plot: "A man and his son search for a stolen bicycle vital for his job.",
    rating: "Not Rated",
    title: "Bicycle Thieves",
    year: "1948"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 394,
    plot:
      'A pair of losers try to pretend that their murdered employer is really alive, but the murderer is out to "finish him off."',
    rating: "PG-13",
    title: "Weekend at Bernie's",
    year: "1989"
  },
  {
    copies: "",
    genre: "Drama, Film-Noir, Romance",
    id: 395,
    plot:
      "A woman is asked to spy on a group of Nazi friends in South America. How far will she have to go to ingratiate herself with them?",
    rating: "Approved",
    title: "Notorious",
    year: "1946"
  },
  {
    copies: "",
    genre: "Drama",
    id: 396,
    plot:
      'In 1960 New York City - the high-powered and glamorous "Golden Age" of advertising - Don Draper, the biggest ad man in the business, struggles to stay a step ahead of the rapidly changing ...',
    rating: "TV-14",
    title: "Smoke Gets in Your Eyes",
    year: "2007"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 397,
    plot:
      "Intensely touching story of a misunderstood young adolescent who left without attention, delves into a life of petty crime.",
    rating: "Not Rated",
    title: "The 400 Blows",
    year: "1959"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 398,
    plot: "N/A",
    rating: "N/A",
    title: "Star Wars",
    year: "1983"
  },
  {
    copies: "",
    genre: "Adventure, Drama, War",
    id: 399,
    plot:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
    rating: "R",
    title: "Inglourious Basterds",
    year: "2009"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 400,
    plot:
      "At South Beach University, a beautiful sorority president takes in a group of unconventional freshman girls seeking acceptance into her house.",
    rating: "R",
    title: "Pledge This!",
    year: "2006"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 401,
    plot:
      "Set during the grand, sweeping Napoleonic age, an officer in the French army insults another officer and sets off a life-long enmity. The two officers, D'Hubert and Feraud, cross swords ...",
    rating: "PG",
    title: "The Duellists",
    year: "1977"
  },
  {
    copies: "",
    genre: "Drama",
    id: 402,
    plot:
      "A young Air Force lieutenant falls in love with fighter planes while his father, a Congressman and war hero, yearns for him to fly heavy bombers.",
    rating: "N/A",
    title: "The Starfighters",
    year: "1964"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 403,
    plot: "The Fat Slags from Viz hit the big time and become celebrities.",
    rating: "N/A",
    title: "Fat Slags",
    year: "2004"
  },
  {
    copies: "",
    genre: "Adventure, Family, Fantasy",
    id: 404,
    plot:
      "The first half of this film, set hundreds of years ago, shows how the old man who eventually became Santa Claus was given immortality and chosen to deliver toys to all the children of the world. The second half moves into the modern era, in which Patch, the head elf, strikes out on his own and falls in with an evil toy manufacturer who wants to corner the market and eliminate Santa Claus.",
    rating: "PG",
    title: "Santa Claus",
    year: "1985"
  },
  {
    copies: "",
    genre: "Action, Adventure, Crime",
    id: 405,
    plot:
      "James Bond is living on the edge to stop an evil arms dealer from starting another world war. Bond crosses all seven continents in order to stop the evil Whitaker and General Koskov.",
    rating: "PG",
    title: "The Living Daylights",
    year: "1987"
  },
  {
    copies: "",
    genre: "Mystery, Sci-Fi, Thriller",
    id: 406,
    plot:
      "In a future world devastated by disease, a convict is sent back in time to gather information about the man-made virus that wiped out most of the human population on the planet.",
    rating: "R",
    title: "Twelve Monkeys",
    year: "1995"
  },
  {
    copies: "",
    genre: "Horror, Drama, Mystery",
    id: 407,
    plot: "Professor and students camp out to find Bigfoot-type creature.",
    rating: "PG",
    title: "Boggy Creek II: And the Legend Continues",
    year: "1985"
  },
  {
    copies: "",
    genre: "Adventure, Biography, Drama",
    id: 408,
    plot:
      "A mountain climber becomes trapped under a boulder while canyoneering alone near Moab, Utah and resorts to desperate measures in order to survive.",
    rating: "R",
    title: "127 Hours",
    year: "2010"
  },
  {
    copies: "",
    genre: "Drama",
    id: 409,
    plot:
      "Captives of the very relationships that define and sustain them, nine women resiliently meet the travails and disappointments of life.",
    rating: "R",
    title: "Nine Lives",
    year: "2005"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 410,
    plot:
      "The Tramp struggles to help a blind flower girl he has fallen in love with.",
    rating: "N/A",
    title: "City Lights",
    year: "1931"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 411,
    plot:
      "Young man goes to work for gangsters to impress his nightclub-singer girlfriend.",
    rating: "Approved",
    title: "I Accuse My Parents",
    year: "1944"
  },
  {
    copies: "",
    genre: "Comedy, Family, Sci-Fi",
    id: 412,
    plot:
      "The Martians kidnap Santa because there is nobody on Mars to give their children presents.",
    rating: "Not Rated",
    title: "Santa Claus Conquers the Martians",
    year: "1964"
  },
  {
    copies: "",
    genre: "Comedy, Crime",
    id: 413,
    plot:
      "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
    rating: "R",
    title: "Lock, Stock and Two Smoking Barrels",
    year: "1998"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 414,
    plot:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
    rating: "PG-13",
    title: "The Lord of the Rings: The Two Towers",
    year: "2002"
  },
  {
    copies: "",
    genre: "Action, Adventure, Comedy",
    id: 415,
    plot:
      "Nasik-based Heerendra Dhaan and Raj Ranade are bodyguards of a politician, but after their employer is implicated in a scam, they end up assaulting a police officer and flee to Mumbai. Once...",
    rating: "N/A",
    title: "Ram Gopal Varma's Indian Flames",
    year: "2007"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 416,
    plot:
      "The planet from Alien (1979) has been colonized, but contact is lost. This time, the rescue team has impressive firepower, but will it be enough?",
    rating: "R",
    title: "Aliens",
    year: "1986"
  },
  {
    copies: "",
    genre: "Crime, Drama, Sport",
    id: 417,
    plot:
      "Having recently been uprooted to Milan, Rocco and his four brothers each look for a new way in life when a prostitute comes between Rocco and his brother Simone.",
    rating: "Approved",
    title: "Rocco and His Brothers",
    year: "1960"
  },
  {
    copies: "",
    genre: "Drama, Romance, War",
    id: 418,
    plot:
      "Three WWII veterans return home to small-town America to discover that they and their families have been irreparably changed.",
    rating: "N/A",
    title: "The Best Years of Our Lives",
    year: "1946"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 419,
    plot:
      "In 1962, the United States government enlists the help of Mutants with superhuman abilities to stop a malicious dictator who is determined to start world war III.",
    rating: "PG-13",
    title: "X-Men: First Class",
    year: "2011"
  },
  {
    copies: "",
    genre: "Action, Adventure, Biography",
    id: 420,
    plot:
      "The slave Spartacus leads a violent revolt against the decadent Roman Republic.",
    rating: "PG-13",
    title: "Spartacus",
    year: "1960"
  },
  {
    copies: "",
    genre: "Drama",
    id: 421,
    plot:
      "A woman seeks revenge on her former lover, who owns a skydiving business.",
    rating: "N/A",
    title: "The Skydivers",
    year: "1963"
  },
  {
    copies: "",
    genre: "Action, Crime, Thriller",
    id: 422,
    plot:
      "Eight years on, a new evil rises from where the Batman and Commissioner Gordon tried to bury it, causing the Batman to resurface and fight to protect Gotham City... the very city which brands him an enemy.",
    rating: "PG-13",
    title: "The Dark Knight Rises",
    year: "2012"
  },
  {
    copies: "",
    genre: "Drama, Horror, Mystery",
    id: 423,
    plot:
      "A woman who lives in a darkened old house with her two photosensitive children becomes convinced that her family home is haunted.",
    rating: "PG-13",
    title: "The Others",
    year: "2001"
  },
  {
    copies: "",
    genre: "Animation, Drama, War",
    id: 424,
    plot:
      "A tragic film covering a young boy and his little sister's struggle to survive in Japan during World War II.",
    rating: "Unrated",
    title: "Grave of the Fireflies",
    year: "1988"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 425,
    plot:
      "John flies over to Paris to find out his girlfriend Elizabeth. He finds a mysterious fashion designer named Lea and her assistant Claire, and it turns out that Lea was Elizabeth's friend in...",
    rating: "R",
    title: "Another Nine & a Half Weeks",
    year: "1997"
  },
  {
    copies: "",
    genre: "Family, Comedy",
    id: 426,
    plot:
      "An evil millionaire (Hulk Hogan) gets amnesia and then belives that he is Santa Claus.",
    rating: "PG",
    title: "Santa with Muscles",
    year: "1996"
  },
  {
    copies: "",
    genre: "Horror, Sci-Fi",
    id: 427,
    plot:
      "A defecting Soviet scientist is hit by a nuclear explosion near Yucca Flats and roams around as a beast.",
    rating: "Unrated",
    title: "The Beast of Yucca Flats",
    year: "1961"
  },
  {
    copies: "",
    genre: "Drama, History, War",
    id: 428,
    plot:
      'A photographer is trapped in Cambodia during tyrant Pol Pot\'s bloody "year Zero" cleansing campaign, which claimed the lives of two million "undesirable" civilians.',
    rating: "R",
    title: "The Killing Fields",
    year: "1984"
  },
  {
    copies: "",
    genre: "Adventure, Drama, Romance",
    id: 429,
    plot:
      "Lt. John Dunbar, exiled to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.",
    rating: "PG-13",
    title: "Dances with Wolves",
    year: "1990"
  },
  {
    copies: "",
    genre: "Action, Adventure, Crime",
    id: 430,
    plot:
      "After training with his mentor, Batman begins his war on crime to free the crime-ridden Gotham City from corruption that the Scarecrow and the League of Shadows have cast upon it.",
    rating: "PG-13",
    title: "Batman Begins",
    year: "2005"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 431,
    plot:
      "The adventures of the Lafayette Escadrille, young Americans who volunteered for the French military before the U.S. entered World War I, and became the country's first fighter pilots.",
    rating: "PG-13",
    title: "Flyboys",
    year: "2006"
  },
  {
    copies: "",
    genre: "Drama, Thriller",
    id: 432,
    plot:
      "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love.",
    rating: "R",
    title: "Amores Perros",
    year: "2000"
  },
  {
    copies: "",
    genre: "Comedy, Drama",
    id: 433,
    plot:
      "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    rating: "G",
    title: "Modern Times",
    year: "1936"
  },
  {
    copies: "",
    genre: "Biography, Drama, Music",
    id: 434,
    plot:
      "The incredible story of Wolfgang Amadeus Mozart, told by his peer and secret rival Antonio Salieri - now confined to an insane asylum.",
    rating: "R",
    title: "Amadeus",
    year: "1984"
  },
  {
    copies: "",
    genre: "Crime, Drama, Romance",
    id: 435,
    plot:
      "A young car thief kills a policeman and tries to persuade a girl to hide in Italy with him.",
    rating: "Unrated",
    title: "Breathless",
    year: "1960"
  },
  {
    copies: "",
    genre: "Action, Comedy",
    id: 436,
    plot:
      "When a small town police station is threatened with shutting down because of too little crime, the police realise that something has to be done...",
    rating: "N/A",
    title: "Kopps",
    year: "2003"
  },
  {
    copies: "",
    genre: "Action, Drama, Fantasy",
    id: 437,
    plot:
      "Theseus is a mortal man chosen by Zeus to lead the fight against the ruthless King Hyperion, who is on a rampage across Greece to obtain a weapon that can destroy humanity.",
    rating: "R",
    title: "Immortals",
    year: "2011"
  },
  {
    copies: "",
    genre: "Action, Adventure, Crime",
    id: 438,
    plot:
      "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
    rating: "PG-13",
    title: "Sherlock Holmes",
    year: "2009"
  },
  {
    copies: "",
    genre: "Drama",
    id: 439,
    plot:
      "Three rebellious teenage girls decide to even the score in the battle of the sexes.",
    rating: "R",
    title: "The Smokers",
    year: "2000"
  },
  {
    copies: "",
    genre: "Drama",
    id: 440,
    plot:
      "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
    rating: "Unrated",
    title: "Wild Strawberries",
    year: "1957"
  },
  {
    copies: "",
    genre: "Crime, Drama, Music",
    id: 441,
    plot:
      "A girl tries to become the top star in the glamorous world of Go-Go Dancing.",
    rating: "R",
    title: "Girl in Gold Boots",
    year: "1968"
  },
  {
    copies: "",
    genre: "Horror, Mystery, Thriller",
    id: 442,
    plot:
      "Five friends go for a break at a remote cabin in the woods, where they get more than they bargained for. Together, they must discover the truth behind the cabin in the woods.",
    rating: "R",
    title: "The Cabin in the Woods",
    year: "2012"
  },
  {
    copies: "",
    genre: "Comedy, Horror, Sci-Fi",
    id: 443,
    plot:
      "A young security guard must track down diminutive aliens who kill people even as they make their fantasies come true.",
    rating: "R",
    title: "Hobgoblins",
    year: "1988"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 444,
    plot:
      "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.",
    rating: "PG-13",
    title: "Transformers",
    year: "2007"
  },
  {
    copies: "",
    genre: "Biography, Crime, Drama",
    id: 445,
    plot:
      "Henry Hill and his friends work their way up through the mob hierarchy.",
    rating: "R",
    title: "Goodfellas",
    year: "1990"
  },
  {
    copies: "",
    genre: null,
    id: 446,
    plot: null,
    rating: "PG-13",
    title: "Les MisÃ©rables",
    year: "2012"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 447,
    plot:
      'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them "idiots".',
    rating: "PG-13",
    title: "3 Idiots",
    year: "2009"
  },
  {
    copies: "",
    genre: "Crime, Thriller",
    id: 448,
    plot:
      "After a simple jewelery heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
    rating: "R",
    title: "Reservoir Dogs",
    year: "1992"
  },
  {
    copies: "",
    genre: "Sci-Fi",
    id: 449,
    plot:
      "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
    rating: "PG-13",
    title: "Tangents",
    year: "1994"
  },
  {
    copies: "",
    genre: "Biography, Comedy, Drama",
    id: 450,
    plot:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caretaker.",
    rating: "R",
    title: "The Intouchables",
    year: "2011"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 451,
    plot:
      "John Beckwith and Jeremy Grey, a pair of committed womanizers who sneak into weddings to take advantage of the romantic tinge in the air, find themselves at odds with one another when John meets and falls for Claire Cleary.",
    rating: "R",
    title: "Wedding Crashers",
    year: "2005"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Romance",
    id: 452,
    plot:
      "Fledgling writer Briony Tallis, as a 13-year-old, irrevocably changes the course of several lives when she accuses her older sister's lover of a crime he did not commit. Based on the British romance novel by Ian McEwan.",
    rating: "R",
    title: "Atonement",
    year: "2007"
  },
  {
    copies: "",
    genre: "Sci-Fi, Thriller",
    id: 453,
    plot:
      "A young man blocks out harmful memories of significant events of his life. As he grows up, he finds a way to remember these lost memories and a supernatural way to alter his life.",
    rating: "R",
    title: "The Butterfly Effect",
    year: "2004"
  },
  {
    copies: "",
    genre: "Biography, Drama, History",
    id: 454,
    plot:
      "In Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    rating: "R",
    title: "Schindler's List",
    year: "1993"
  },
  {
    copies: "",
    genre: "Drama",
    id: 455,
    plot: "A film detailing the final hours and crucifixion of Jesus Christ.",
    rating: "R",
    title: "The Passion of the Christ",
    year: "2004"
  },
  {
    copies: "",
    genre: "Action, Crime, Drama",
    id: 456,
    plot:
      "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.",
    rating: "PG-13",
    title: "The Dark Knight",
    year: "2008"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 457,
    plot:
      "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
    rating: "Unrated",
    title: "All Quiet on the Western Front",
    year: "1930"
  },
  {
    copies: "",
    genre: "Action, Adventure, Mystery",
    id: 458,
    plot:
      "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
    rating: "Not Rated",
    title: "North by Northwest",
    year: "1959"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 459,
    plot:
      "An African American police detective is asked to investigate a murder in a racially hostile southern town.",
    rating: "Approved",
    title: "In the Heat of the Night",
    year: "1967"
  },
  {
    copies: "",
    genre: "Horror",
    id: 460,
    plot:
      "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
    rating: "R",
    title: "The Exorcist",
    year: "1973"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 461,
    plot:
      "When two musicians witness a mob hit, they flee the state in an all female band disguised as women, but further complications set in.",
    rating: "Not Rated",
    title: "Some Like It Hot",
    year: "1959"
  },
  {
    copies: "",
    genre: "Action, Adventure, Fantasy",
    id: 462,
    plot:
      "Three unknowing martial artists are summoned to a mysterious island to compete in a tournament whose outcome will decide the fate of the world.",
    rating: "PG-13",
    title: "Mortal Kombat",
    year: "1995"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 463,
    plot:
      "An ex-prize fighter turned longshoreman struggles to stand up to his corrupt union bosses.",
    rating: "Not Rated",
    title: "On the Waterfront",
    year: "1954"
  },
  {
    copies: "",
    genre: "Drama, Romance, Short",
    id: 464,
    plot:
      "In a typical school dorm two parties are colliding. One is the Hockey guys and their girls the other the drama students. As the night progresses one of the hockey guys deceides to shoot the...",
    rating: "N/A",
    title: "Elevhemmet",
    year: "2003"
  },
  {
    copies: "",
    genre: "Documentary, Music",
    id: 465,
    plot:
      "From the early black and white days to their colourful hedonistic era, you will Rock! See them at their most creative, and destructive, and experience The Who: Here!",
    rating: "PG",
    title: "The Kids Are Alright",
    year: "1979"
  },
  {
    copies: "",
    genre: "Action, Crime, Drama",
    id: 466,
    plot:
      "Two Chicago firefighter brothers who don't get along have to work together while a dangerous arsonist is on the loose.",
    rating: "R",
    title: "Backdraft",
    year: "1991"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 467,
    plot:
      'Told in Documentary form, the film depicts a group of five British film critics and politicians who venture off into the West Virginian wilderness in search of the "Tony Blair Witch" which ...',
    rating: "Unrated",
    title: "The Tony Blair Witch Project",
    year: "2000"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Sci-Fi",
    id: 468,
    plot:
      "A Gulf war veteran is wrongly sent to a mental institution for insane criminals, where he becomes the object of a Doctor's experiments, and his life is completely affected by them.",
    rating: "R",
    title: "The Jacket",
    year: "2005"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 469,
    plot:
      "A spoiled heiress, running away from her family, is helped by a man who's actually a reporter looking for a story.",
    rating: "Unrated",
    title: "It Happened One Night",
    year: "1934"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 470,
    plot:
      "Captain Picard and his crew pursue the Borg back in time to stop them from preventing Earth's first contact with an alien species. They also make sure that Zefram Cochrane makes his famous maiden flight at warp speed.",
    rating: "PG-13",
    title: "Star Trek: First Contact",
    year: "1996"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 471,
    plot:
      "A man tries to rise in his company by letting its executives use his apartment for trysts, but complications and a romance of his own ensue.",
    rating: "Approved",
    title: "The Apartment",
    year: "1960"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 472,
    plot:
      "An eccentric, mystical FBI agent arrives in the small Pacific Northwest town of Twin Peaks to investigate the murder of a young high school girl.",
    rating: "Unrated",
    title: "Pilot",
    year: "1990"
  },
  {
    copies: "",
    genre: "Horror, Sci-Fi",
    id: 473,
    plot:
      'A young man is transformed into a hideous "moon beast" due to a meteor fragment lodged in his body.',
    rating: "PG",
    title: "Track of the Moon Beast",
    year: "1976"
  },
  {
    copies: "",
    genre: "Biography, Drama, War",
    id: 474,
    plot:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    rating: "R",
    title: "The Pianist",
    year: "2002"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 475,
    plot:
      "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror.",
    rating: "R",
    title: "Das Boot",
    year: "1981"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 476,
    plot:
      "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    rating: "R",
    title: "Full Metal Jacket",
    year: "1987"
  },
  {
    copies: "",
    genre: "Sci-Fi",
    id: 477,
    plot:
      "A teenager stumbles upon an alien weapon, which transform him into a grotesque killer.",
    rating: "PG",
    title: "Laserblast",
    year: "1978"
  },
  {
    copies: "",
    genre: "Drama",
    id: 478,
    plot:
      "Upon admittance to a mental institution, a brash rebel rallies the patients to take on the oppressive head nurse.",
    rating: "R",
    title: "One Flew Over the Cuckoo's Nest",
    year: "1975"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 479,
    plot:
      "An elderly woman is found dead in her cottage and DCI Barnaby is convinced the death is not down to natural causes.",
    rating: "N/A",
    title: "The Killings at Badger's Drift",
    year: "1997"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Music",
    id: 480,
    plot:
      "A talented young boy becomes torn between his unexpected love of dance and the disintegration of his family.",
    rating: "PG-13",
    title: "Billy Elliot",
    year: "2000"
  },
  {
    copies: "",
    genre: "Fantasy, Sci-Fi",
    id: 481,
    plot: "A mad scientist transforms himself into an aquatic killer.",
    rating: "PG",
    title: "Zaat",
    year: "1971"
  },
  {
    copies: "",
    genre: "Drama, Romance",
    id: 482,
    plot:
      "At a turning point in his life, a former tennis pro falls for a femme-fatal type who happens to be dating his friend and soon-to-be brother-in-law.",
    rating: "R",
    title: "Match Point",
    year: "2005"
  },
  {
    copies: "",
    genre: "Action, Crime, Drama",
    id: 483,
    plot:
      "A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.",
    rating: "R",
    title: "Heat",
    year: "1995"
  },
  {
    copies: "",
    genre: "Western",
    id: 484,
    plot:
      "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    rating: "PG-13",
    title: "Once Upon a Time in the West",
    year: "1968"
  },
  {
    copies: "",
    genre: "Action, Biography, Drama",
    id: 485,
    plot:
      "When his secret bride is executed for assaulting an English soldier who tried to rape her, a commoner begins a revolt and leads Scottish warriors against the cruel English tyrant who rules Scotland with an iron fist.",
    rating: "R",
    title: "Braveheart",
    year: "1995"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 486,
    plot:
      "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
    rating: "PG-13",
    title: "The Artist",
    year: "2011"
  },
  {
    copies: "",
    genre: "Comedy",
    id: 487,
    plot: "The comedic misadventures of a person of indeterminable gender.",
    rating: "PG-13",
    title: "It's Pat",
    year: "1994"
  },
  {
    copies: "",
    genre: "Animation, Family, Fantasy",
    id: 488,
    plot:
      "Belle, whose father is imprisoned by the Beast, offers herself instead and discovers her captor to be an enchanted prince.",
    rating: "G",
    title: "Beauty and the Beast",
    year: "1991"
  },
  {
    copies: "",
    genre: "Drama",
    id: 489,
    plot:
      "A teacher lives a lonely life, all the while struggling over his son's custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    rating: "R",
    title: "The Hunt",
    year: "2012"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 490,
    plot:
      "A young and impatient stockbroker is willing to do anything to get to the top, including trading on illegal inside information taken through a ruthless and greedy corporate raider who takes the youth under his wing.",
    rating: "R",
    title: "Wall Street",
    year: "1987"
  },
  {
    copies: "",
    genre: "Horror",
    id: 491,
    plot:
      'Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter\'s wife. Silent classic based on the story "Dracula."',
    rating: "Unrated",
    title: "Nosferatu",
    year: "1922"
  },
  {
    copies: "",
    genre: "Action",
    id: 492,
    plot:
      "When a scientists daughter is kidnapped, American Ninja (David Bradley), attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja.",
    rating: "PG-13",
    title: "American Ninja V",
    year: "1993"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 493,
    plot:
      "During the U.S.-Viet Nam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade colonel who has set himself up as a god among a local tribe.",
    rating: "R",
    title: "Apocalypse Now",
    year: "1979"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Sci-Fi",
    id: 494,
    plot:
      "An insurance salesman/adjuster discovers his entire life is actually a T.V. show.",
    rating: "PG",
    title: "The Truman Show",
    year: "1998"
  },
  {
    copies: "",
    genre: "Action, Adventure, Sci-Fi",
    id: 495,
    plot:
      "Jack Hall, paleoclimatologist, must make a daring trek across America to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.",
    rating: "PG-13",
    title: "The Day After Tomorrow",
    year: "2004"
  },
  {
    copies: "",
    genre: "Mystery, Thriller",
    id: 496,
    plot:
      "A wheelchair bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
    rating: "Approved",
    title: "Rear Window",
    year: "1954"
  },
  {
    copies: "",
    genre: "Drama",
    id: 497,
    plot:
      "A group of 1950s high schoolers come of age in a bleak, isolated, atrophied West Texas town that is slowly dying, both economically and culturally.",
    rating: "R",
    title: "The Last Picture Show",
    year: "1971"
  },
  {
    copies: "",
    genre: "Crime, Drama, Mystery",
    id: 498,
    plot:
      "Sam volunteers to go undercover to discover how rationed gasoline is being stolen from a fuel depot, and Andrew becomes a suspect in a murder case.",
    rating: "N/A",
    title: "Among the Few",
    year: "2003"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 499,
    plot:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
    rating: "R",
    title: "American History X",
    year: "1998"
  },
  {
    copies: "",
    genre: "Comedy, Crime, Drama",
    id: 500,
    plot:
      "A successful DJ manages to rescue a powerful mobster one night. In order to repay him, the mobster gives him the task of protecting his daughter.",
    rating: "PG-13",
    title: "In the Mix",
    year: "2005"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi",
    id: 501,
    plot:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    rating: "R",
    title: "The Matrix",
    year: "1999"
  },
  {
    copies: "",
    genre: "Animation, Comedy, Drama",
    id: 502,
    plot:
      "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
    rating: "Not Rated",
    title: "Mary and Max",
    year: "2009"
  },
  {
    copies: "",
    genre: "Adventure, Mystery, Sci-Fi",
    id: 503,
    plot:
      "Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
    rating: "G",
    title: "2001: A Space Odyssey",
    year: "1968"
  },
  {
    copies: "",
    genre: "Action, Comedy, Crime",
    id: 504,
    plot:
      "After being released from jail, Tommy Vercetti left Liberty City for Vice City--a city overrun by the mob. Now, Tommy is out to make the Vice City his home.",
    rating: "N/A",
    title: "Grand Theft Auto: Vice City",
    year: "2002"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Thriller",
    id: 505,
    plot:
      "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.",
    rating: "R",
    title: "Oldboy",
    year: "2003"
  },
  {
    copies: "",
    genre: "Drama, War",
    id: 506,
    plot:
      "When soldiers in World War I refuse to continue with an impossible attack, their superior officers decide to make an example of them.",
    rating: "Approved",
    title: "Paths of Glory",
    year: "1957"
  },
  {
    copies: "",
    genre: "Drama, History, Thriller",
    id: 507,
    plot:
      "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May 2011.",
    rating: "R",
    title: "Zero Dark Thirty",
    year: "2012"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Family",
    id: 508,
    plot:
      "In the middle of her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures.",
    rating: "PG",
    title: "Spirited Away",
    year: "2001"
  },
  {
    copies: "",
    genre: "Mystery, Sci-Fi",
    id: 509,
    plot:
      "A man struggles with memories of his past, including a wife he cannot remember, in a nightmarish world with no sun and run by beings with telekinetic powers who seek the souls of humans.",
    rating: "R",
    title: "Dark City",
    year: "1998"
  },
  {
    copies: "",
    genre: "Comedy, Musical, Romance",
    id: 510,
    plot:
      "A waitress from Texas and a college student from Pennsylvania meet during spring break in Fort Lauderdale, Florida and come together through their shared love of singing.",
    rating: "PG",
    title: "From Justin to Kelly",
    year: "2003"
  },
  {
    copies: "",
    genre: "Comedy, Drama",
    id: 511,
    plot:
      "Because of his insistence that his companion is an invisible six-foot rabbit, a whimsical middle-aged man is thought by his family to be insane - but the man might be wiser than anyone knows.",
    rating: "Not Rated",
    title: "Harvey",
    year: "1950"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Fantasy",
    id: 512,
    plot: "A weatherman finds himself living the same day over and over again.",
    rating: "PG",
    title: "Groundhog Day",
    year: "1993"
  },
  {
    copies: "",
    genre: "Action, Adventure, Drama",
    id: 513,
    plot:
      "The aliens are coming and their goal is to invade and destroy. Fighting superior technology, Man's best weapon is the will to survive.",
    rating: "PG-13",
    title: "Independence Day",
    year: "1996"
  },
  {
    copies: "",
    genre: "Comedy, Sport",
    id: 514,
    plot:
      "A wacky free-for-all comedy about the riotous rivalry between snobby skiers and knuckle-dragging snowboarders.",
    rating: "PG",
    title: "Snowboard Academy",
    year: "1996"
  },
  {
    copies: "",
    genre: "Action, Drama, History",
    id: 515,
    plot:
      "The events of D-Day, told on a grand scale from both the Allied and German points of view.",
    rating: "G",
    title: "The Longest Day",
    year: "1962"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 516,
    plot:
      "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
    rating: "PG-13",
    title: "The Holiday",
    year: "2006"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 517,
    plot:
      "A bored and sheltered princess escapes her guardians and falls in love with an American newsman in Rome.",
    rating: "Not Rated",
    title: "Roman Holiday",
    year: "1953"
  },
  {
    copies: "",
    genre: "Action, Sci-Fi, Thriller",
    id: 518,
    plot:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John, from a more advanced cyborg, made out of liquid metal.",
    rating: "R",
    title: "Terminator 2: Judgment Day",
    year: "1991"
  },
  {
    copies: "",
    genre: "Drama, Mystery, Romance",
    id: 519,
    plot:
      "A woman faces deadly consequences for abandoning her loving relationship with her boyfriend to pursue exciting sexual scenarios with a mysterious celebrity mountaineer.",
    rating: "R",
    title: "Killing Me Softly",
    year: "2002"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 520,
    plot:
      "A man gets a chance to meet up with his dream girl from highschool, even though his date with her back then was a complete disaster.",
    rating: "R",
    title: "There's Something About Mary",
    year: "1998"
  },
  {
    copies: "",
    genre: "Drama, Sport",
    id: 521,
    plot:
      "A determined woman works with a hardened boxing trainer to become a professional.",
    rating: "PG-13",
    title: "Million Dollar Baby",
    year: "2004"
  },
  {
    copies: "",
    genre: "Comedy, Drama, Romance",
    id: 522,
    plot:
      "Based on Nick Hornby's best-selling novel, About A Boy is the story of a cynical, immature young man who is taught how to act like a grown-up by a little boy",
    rating: "PG-13",
    title: "About a Boy",
    year: "2002"
  },
  {
    copies: "",
    genre: "Adventure, Fantasy",
    id: 523,
    plot:
      "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
    rating: "PG-13",
    title: "The Hobbit: An Unexpected Journey",
    year: "2012"
  },
  {
    copies: "",
    genre: "Animation, Adventure, Comedy",
    id: 524,
    plot:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
    rating: "G",
    title: "Toy Story",
    year: "1995"
  },
  {
    copies: "",
    genre: "Biography, Drama",
    id: 525,
    plot:
      "The true story of Elle editor Jean-Dominique Bauby who suffers a stroke and has to live with an almost totally paralyzed body; only his left eye isn't paralyzed.",
    rating: "PG-13",
    title: "The Diving Bell and the Butterfly",
    year: "2007"
  },
  {
    copies: "",
    genre: "Drama, Horror, Mystery",
    id: 526,
    plot:
      "A young couple move into a new apartment, only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins controlling her life.",
    rating: "R",
    title: "Rosemary's Baby",
    year: "1968"
  },
  {
    copies: "",
    genre: "Comedy, Family, Fantasy",
    id: 527,
    plot:
      "An overworked mother and her daughter do not get along. When they switch bodies, each is forced to adapt to the others life for one freaky Friday.",
    rating: "PG",
    title: "Freaky Friday",
    year: "2003"
  },
  {
    copies: "",
    genre: "Drama",
    id: 528,
    plot:
      "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation for his daughter's attractive friend.",
    rating: "R",
    title: "American Beauty",
    year: "1999"
  },
  {
    copies: "",
    genre: "Adventure, Drama",
    id: 529,
    plot:
      "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
    rating: "R",
    title: "Troy",
    year: "2004"
  },
  {
    copies: "",
    genre: "Action, Adventure, Romance",
    id: 530,
    plot:
      "A pilot is the only hope to stop the mutiny of a spacecraft by its security crew, who plot to sell the crew of the ship into slavery.",
    rating: "R",
    title: "Space Mutiny",
    year: "1988"
  },
  {
    copies: "",
    genre: "Adventure, Western",
    id: 531,
    plot:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    rating: "Approved",
    title: "The Good, the Bad and the Ugly",
    year: "1966"
  },
  {
    copies: "",
    genre: "Comedy, Romance",
    id: 532,
    plot:
      "When Anus Magillicutty's woman stops a would-be assassin, Anus is forced to interrupt his life of guzzling beer and women to dispose of the corpse. What starts as a simple chore quickly ...",
    rating: "Not Rated",
    title: "Anus Magillicutty",
    year: "2003"
  },
  {
    copies: "",
    genre: "Biography, Drama, Music",
    id: 533,
    plot:
      "A chronicle of John Lennon's first years, focused mainly in his adolescence and his relationship with his stern aunt Mimi, who raised him, and his absentee mother Julia, who re-entered his life at a crucial moment in his young life.",
    rating: "R",
    title: "Nowhere Boy",
    year: "2009"
  },
  {
    copies: "",
    genre: "Crime, Drama, Film-Noir",
    id: 534,
    plot:
      "An insurance rep lets himself be talked into a murder/insurance fraud scheme that arouses an insurance investigator's suspicions.",
    rating: "N/A",
    title: "Double Indemnity",
    year: "1944"
  },
  {
    copies: "",
    genre: "Drama, Sport",
    id: 535,
    plot:
      "Rocky Balboa, a small-time boxer gets a supremely rare chance to fight the heavy-weight champion, Apollo Creed, in a bout in which he strives to go the distance for his self-respect.",
    rating: "PG",
    title: "Rocky",
    year: "1976"
  },
  {
    copies: "",
    genre: "Crime, Mystery, Thriller",
    id: 536,
    plot:
      "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
    rating: "R",
    title: "Sin City",
    year: "2005"
  },
  {
    copies: "",
    genre: "Adventure, Family, Fantasy",
    id: 537,
    plot:
      "Dorothy Gale is swept away to a magical land in a tornado and embarks on a quest to see the Wizard who can help her return home.",
    rating: "PG",
    title: "The Wizard of Oz",
    year: "1939"
  },
  {
    copies: "",
    genre: "Action, Comedy",
    id: 538,
    plot:
      "Basketball superstar Dennis Rodman stars as a hip Interpol agent attempting to defeat the deadly plans of a crazed arms dealer.",
    rating: "PG-13",
    title: "Simon Sez",
    year: "1999"
  },
  {
    copies: "",
    genre: "Crime, Drama",
    id: 539,
    plot:
      "A promising college athlete takes a turn for the worse when he hooks up with old highschool friends during his summer break.",
    rating: "R",
    title: "The Hillz",
    year: "2004"
  },
  {
    copies: "2",
    genre: "Animation, Adventure, Drama",
    id: 540,
    plot:
      "By tying thousands of balloons to his home, 78-year-old Carl sets out to fulfill his lifelong dream to see the wilds of South America. Russell, a wilderness explorer 70 years younger, inadvertently becomes a stowaway.",
    rating: "PG",
    title: "up",
    year: "2009"
  }
];

const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const newMovie = {
  copies: "",
  genre: "",
  id: null,
  plot: "",
  rating: "",
  title: "",
  year: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  movies,
  newMovie,
  newCourse,
  courses,
  authors
};
