import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const Testimonials = () => {
  const reviews = [
    { name: "Sarah J.", role: "CEO, TechStart", text: "Riolabz transformed our outdated system into a sleek, modern platform. Highly recommended!" },
    { name: "Michael R.", role: "Founder, AppVenture", text: "Their mobile app development team is incredibly talented. Delivered on time and beyond expectations." }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <SectionTitle subtitle="Testimonials" title="Client Love" />
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {reviews.map((review, i) => (
          <Card key={i}>
            <p className="text-slate-300 italic mb-6">"{review.text}"</p>
            <div>
              <h4 className="text-white font-bold">{review.name}</h4>
              <p className="text-indigo-400 text-sm">{review.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;