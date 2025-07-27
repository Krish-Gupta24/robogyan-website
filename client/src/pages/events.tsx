import { motion } from "framer-motion";
import { upcomingEvents, pastEvents } from "@/data/events-data";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Trophy } from "lucide-react";

const statusColors = {
  Open: "bg-[hsl(150,100%,50%,0.2)] text-[hsl(150,100%,50%)]",
  Live: "bg-[hsl(220,100%,50%,0.2)] text-[hsl(220,100%,50%)]",
  Upcoming: "bg-[hsl(270,100%,70%,0.2)] text-[hsl(270,100%,70%)]",
  Ended: "bg-[hsl(0,0%,40%,0.2)] text-[hsl(0,0%,60%)]",
};

const typeColors = {
  Workshop: "bg-[hsl(150,100%,50%,0.2)] text-[hsl(150,100%,50%)]",
  Hackathon: "bg-[hsl(270,100%,70%,0.2)] text-[hsl(270,100%,70%)]",
  Competition: "bg-[hsl(220,100%,50%,0.2)] text-[hsl(220,100%,50%)]",
  Seminar: "bg-[hsl(180,100%,50%,0.2)] text-[hsl(180,100%,50%)]",
  Conference: "bg-[hsl(60,100%,50%,0.2)] text-[hsl(60,100%,50%)]",
};

export default function Events() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-russo text-5xl mb-8 text-[hsl(180,100%,50%)] neon-text">
            Events
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and competitions that shape the future of technology.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-3xl font-bold mb-8 gradient-text"
          >
            Upcoming Events
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassmorphismCard>
                  {/* Event Image */}
                  <motion.img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Event Header */}
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className={typeColors[event.type]}>
                      {event.type}
                    </Badge>
                    <Badge variant="secondary" className={statusColors[event.status]}>
                      {event.status}
                    </Badge>
                  </div>

                  <h4 className="font-orbitron text-2xl font-bold mb-3 text-[hsl(180,100%,50%)]">
                    {event.name}
                  </h4>

                  <p className="text-gray-300 mb-6">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="text-[hsl(220,100%,50%)]" size={18} />
                      <span className="text-gray-300">
                        {event.endDate ? `${event.date} - ${event.endDate}` : event.date}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="text-[hsl(220,100%,50%)]" size={18} />
                      <span className="text-gray-300">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-[hsl(220,100%,50%)]" size={18} />
                      <span className="text-gray-300">{event.venue}</span>
                    </div>
                    {event.maxParticipants && (
                      <div className="flex items-center space-x-3">
                        <Users className="text-[hsl(220,100%,50%)]" size={18} />
                        <span className="text-gray-300">Max {event.maxParticipants} participants</span>
                      </div>
                    )}
                    {event.prizePool && (
                      <div className="flex items-center space-x-3">
                        <Trophy className="text-[hsl(220,100%,50%)]" size={18} />
                        <span className="text-gray-300">Prize Pool: {event.prizePool}</span>
                      </div>
                    )}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-[hsl(180,100%,50%)] to-[hsl(220,100%,50%)] text-[hsl(0,0%,4%)] hover:scale-105 transition-transform font-semibold"
                  >
                    Register Now
                  </Button>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-orbitron text-3xl font-bold mb-8 gradient-text"
          >
            Past Events
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassmorphismCard className="opacity-75">
                  <motion.img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-[hsl(0,0%,40%,0.2)] text-[hsl(0,0%,60%)]">
                      {event.type}
                    </Badge>
                    <Badge variant="secondary" className={statusColors[event.status]}>
                      {event.status}
                    </Badge>
                  </div>

                  <h4 className="font-orbitron text-xl font-bold mb-3 text-gray-300">
                    {event.name}
                  </h4>
                  <p className="text-gray-400 mb-4 text-sm">
                    {event.description}
                  </p>
                  <div className="text-gray-500 text-sm">{event.date}</div>
                </GlassmorphismCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
