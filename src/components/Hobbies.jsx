import React, { useState, useEffect } from 'react';
import { 
  FaFootballBall, 
  FaBasketballBall, 
  FaGolfBall, 
  FaTableTennis, 
  FaChartLine, 
  FaGamepad, 
  FaUtensils, 
  FaLeaf,
  FaTrophy,
  FaHeart,
  FaBrain,
  FaFire
} from 'react-icons/fa';

const Hobbies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    sportsWatched: 0,
    gamesPlayed: 0,
    mealsCooked: 0,
    pokerHands: 0
  });

  const hobbies = [
    {
      id: 'sports-analytics',
      title: 'Sports Analytics',
      description: 'Deep dive into football, basketball, golf, and tennis statistics',
      icon: FaChartLine,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      stats: ['NFL Analytics', 'NBA Advanced Stats', 'Golf Course Analysis', 'Tennis Match Data'],
      emoji: '📊'
    },
    {
      id: 'playing-sports',
      title: 'Playing Sports',
      description: 'Active participation in various sports and physical activities',
      icon: FaTrophy,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      stats: ['Basketball', 'Tennis', 'Golf', 'Football'],
      emoji: '🏆'
    },
    {
      id: 'poker',
      title: 'Poker',
      description: 'Strategic card game that combines skill, psychology, and mathematics',
      icon: FaGamepad,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      stats: ['Texas Hold\'em', 'Tournament Play', 'Bluffing Strategy', 'Pot Odds'],
      emoji: '🃏'
    },
    {
      id: 'cooking',
      title: 'Vegetarian Cooking',
      description: 'Creating delicious plant-based meals and exploring new recipes',
      icon: FaUtensils,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      stats: ['Indian Cuisine', 'Mediterranean', 'Asian Fusion', 'Healthy Recipes'],
      emoji: '🥗'
    }
  ];

  const sportsIcons = [
    { icon: FaFootballBall, color: 'text-blue-400', delay: 'delay-0' },
    { icon: FaBasketballBall, color: 'text-orange-400', delay: 'delay-100' },
    { icon: FaGolfBall, color: 'text-green-400', delay: 'delay-200' },
    { icon: FaTableTennis, color: 'text-yellow-400', delay: 'delay-300' },
    { icon: FaChartLine, color: 'text-purple-400', delay: 'delay-400' },
    { icon: FaTrophy, color: 'text-red-400', delay: 'delay-500' }
  ];

  useEffect(() => {
    const animateStats = () => {
      setAnimatedStats({
        sportsWatched: 0,
        gamesPlayed: 0,
        mealsCooked: 0,
        pokerHands: 0
      });

      setTimeout(() => {
        setAnimatedStats({
          sportsWatched: 150,
          gamesPlayed: 75,
          mealsCooked: 200,
          pokerHands: 50
        });
      }, 500);
    };

    animateStats();
  }, []);

  return (
    <section id="hobbies" className="py-16 px-4 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Sports Icons */}
        {sportsIcons.map((sport, index) => (
          <div
            key={index}
            className={`absolute ${sport.color} opacity-20 animate-float ${sport.delay}`}
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 3) * 25}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index * 0.5}s`
            }}
          >
            <sport.icon size={40} />
          </div>
        ))}

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-float delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg rotate-45 animate-float delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-float delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg animate-float delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-full mb-4">
            <span className="text-blue-300 text-sm font-medium tracking-wider uppercase">
              Beyond Code
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              My Passions
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            When I'm not coding, you'll find me analyzing sports statistics, playing games, 
            cooking up delicious vegetarian meals, or strategizing at the poker table.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Games Analyzed', value: animatedStats.sportsWatched, icon: FaChartLine, color: 'text-blue-400' },
            { label: 'Sports Played', value: animatedStats.gamesPlayed, icon: FaTrophy, color: 'text-green-400' },
            { label: 'Meals Cooked', value: animatedStats.mealsCooked, icon: FaUtensils, color: 'text-orange-400' },
            { label: 'Poker Hands', value: animatedStats.pokerHands, icon: FaGamepad, color: 'text-purple-400' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <stat.icon className={`${stat.color} text-2xl mx-auto mb-2`} />
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}+
              </div>
              <div className="text-slate-300 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className={`group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl`}
              onMouseEnter={() => setHoveredCard(hobby.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Hobby Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${hobby.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <hobby.icon className="text-white text-xl" />
              </div>

              {/* Hobby Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                  {hobby.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {hobby.description}
                </p>
              </div>

              {/* Stats Tags */}
              <div className="flex flex-wrap gap-2">
                {hobby.stats.map((stat, statIndex) => (
                  <span
                    key={statIndex}
                    className={`px-2 py-1 bg-gradient-to-r ${hobby.color} bg-opacity-20 text-white text-xs rounded-full border border-white/30 group-hover:bg-opacity-30 transition-all duration-300`}
                  >
                    {stat}
                  </span>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              {hoveredCard === hobby.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl pointer-events-none animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hobbies;
