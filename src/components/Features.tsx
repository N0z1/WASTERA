import React from 'react';
import { BookOpenIcon, UsersIcon, TrendingUpIcon, AwardIcon } from 'lucide-react';
export function Features() {
  const features = [{
    icon: BookOpenIcon,
    title: 'Learn & Implement',
    description: 'Access guides and tips for sustainable waste management'
  }, {
    icon: UsersIcon,
    title: 'Community Support',
    description: 'Join others working towards net-zero goals'
  }, {
    icon: TrendingUpIcon,
    title: 'Track Progress',
    description: 'Monitor your environmental impact and improvements'
  }, {
    icon: AwardIcon,
    title: 'Get Certified',
    description: 'Earn recognition for your sustainability efforts'
  }];
  return <section className="w-full bg-gray-50 px-6 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Your Path to Net Zero
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Whether you're a business or individual, we're here to help you make
          an impact
        </p>
        <div className="space-y-8">
          {features.map((feature, index) => <div key={index} className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}