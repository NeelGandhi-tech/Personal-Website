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
    <section id="hobbies" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-300 text-sm font-medium tracking-wider uppercase">
              Beyond Code
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              My Passions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            When I'm not coding, you'll find me analyzing sports statistics, playing games, 
            cooking up delicious vegetarian meals, or strategizing at the poker table.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Games Analyzed', value: animatedStats.sportsWatched, icon: FaChartLine, color: 'text-blue-400' },
            { label: 'Sports Played', value: animatedStats.gamesPlayed, icon: FaTrophy, color: 'text-green-400' },
            { label: 'Meals Cooked', value: animatedStats.mealsCooked, icon: FaUtensils, color: 'text-orange-400' },
            { label: 'Poker Hands', value: animatedStats.pokerHands, icon: FaGamepad, color: 'text-purple-400' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <stat.icon className={`${stat.color} text-3xl mx-auto mb-3`} />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}+
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className={`group relative bg-white/5 backdrop-blur-sm border ${hobby.borderColor} rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              onMouseEnter={() => setHoveredCard(hobby.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Hobby Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${hobby.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <hobby.icon className="text-white text-2xl" />
              </div>

              {/* Hobby Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {hobby.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {hobby.description}
                </p>
              </div>

              {/* Stats Tags */}
              <div className="flex flex-wrap gap-2">
                {hobby.stats.map((stat, statIndex) => (
                  <span
                    key={statIndex}
                    className={`px-3 py-1 bg-gradient-to-r ${hobby.color} bg-opacity-20 text-white text-sm rounded-full border ${hobby.borderColor} group-hover:bg-opacity-30 transition-all duration-300`}
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

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-3xl backdrop-blur-sm">
            <FaHeart className="text-red-400 text-2xl mx-auto mb-4 animate-pulse" />
            <p className="text-xl text-gray-300 italic">
              "Life is about balance - coding with passion, playing with purpose, 
              and cooking with love."
            </p>
            <div className="flex justify-center mt-4 space-x-2">
              <FaBrain className="text-blue-400 animate-bounce" />
              <FaFire className="text-orange-400 animate-bounce delay-100" />
              <FaLeaf className="text-green-400 animate-bounce delay-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
