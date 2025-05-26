import React from 'react';
import { HomeIcon, BuildingIcon, BookIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: HomeIcon,
    title: 'For Individuals',
    description: 'Learn and implement sustainable practices at home',
    features: ['Waste reduction tips', 'Recycling guides', 'Carbon footprint tracking']
  }, {
    icon: BuildingIcon,
    title: 'For Businesses',
    description: 'Comprehensive solutions for your organization',
    features: ['Waste audits', 'Staff training', 'Compliance support']
  }, {
    icon: BookIcon,
    title: 'Educational Resources',
    description: 'Free resources to help you reach net-zero goals',
    features: ['Online courses', 'Case studies', 'Best practices']
  }];
  return <section className="w-full bg-white px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Solutions For Everyone
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Discover how you can contribute to a sustainable future
        </p>
        <div className="space-y-8">
          {services.map((service, index) => <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>
    </section>;
}