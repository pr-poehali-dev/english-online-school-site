import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const features = [
    {
      icon: "Sparkles",
      title: "Интерактивные уроки",
      description: "Учись английскому через игры, квизы и практические задания"
    },
    {
      icon: "Users",
      title: "Живое общение",
      description: "Общайся с носителями языка и другими студентами"
    },
    {
      icon: "Trophy",
      title: "Система достижений",
      description: "Получай награды за прогресс и мотивируй себя учиться"
    },
    {
      icon: "Zap",
      title: "Быстрый результат",
      description: "Видимые улучшения уже через 2 недели занятий"
    }
  ];

  const courses = [
    {
      level: "Начальный",
      color: "from-purple-500 to-pink-500",
      duration: "3 месяца",
      lessons: "48 уроков"
    },
    {
      level: "Средний",
      color: "from-blue-500 to-cyan-500",
      duration: "4 месяца",
      lessons: "64 урока"
    },
    {
      level: "Продвинутый",
      color: "from-orange-500 to-red-500",
      duration: "5 месяцев",
      lessons: "80 уроков"
    }
  ];

  const reviews = [
    {
      name: "Анна Петрова",
      text: "За 3 месяца я прошла путь от нуля до уверенного общения!",
      rating: 5
    },
    {
      name: "Дмитрий Соколов",
      text: "Отличная платформа! Интерактивные уроки делают обучение увлекательным.",
      rating: 5
    },
    {
      name: "Мария Иванова",
      text: "Наконец-то нашла школу, где английский учится легко и с удовольствием!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="font-heading font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              EnglishPro
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Курсы
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Преимущества
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Отзывы
            </a>
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-2 rounded-full border border-purple-200 mb-8">
              <Icon name="Sparkles" size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Онлайн школа английского языка</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Английский язык<br />без скуки и зубрёжки
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Современная методика обучения с геймификацией и живым общением. 
              Результат гарантирован уже через 2 недели!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-12 py-6 rounded-2xl shadow-2xl hover:shadow-purple-300 transition-all hover:scale-105 font-heading font-bold"
                onClick={() => setIsDialogOpen(true)}
              >
                Начать обучение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6 rounded-2xl font-semibold"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Посмотреть демо
              </Button>
            </div>

            <div className="mt-12 flex justify-center gap-12 text-center">
              <div>
                <div className="font-heading font-bold text-4xl text-purple-600">10K+</div>
                <div className="text-gray-600 mt-1">Студентов</div>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl text-pink-600">98%</div>
                <div className="text-gray-600 mt-1">Довольных</div>
              </div>
              <div>
                <div className="font-heading font-bold text-4xl text-blue-600">500+</div>
                <div className="text-gray-600 mt-1">Уроков</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современный подход к изучению английского языка
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className={`p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 hover:scale-105 ${
                  activeFeature === idx 
                    ? 'border-purple-400 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50' 
                    : 'border-transparent bg-white'
                }`}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${
                  idx === 0 ? 'from-purple-500 to-pink-500' :
                  idx === 1 ? 'from-blue-500 to-cyan-500' :
                  idx === 2 ? 'from-orange-500 to-red-500' :
                  'from-green-500 to-emerald-500'
                }`}>
                  <Icon name={feature.icon} className="text-white" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Выбери свой уровень
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Программы обучения для любого уровня подготовки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {courses.map((course, idx) => (
              <Card 
                key={idx}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`h-40 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <h3 className="font-heading font-bold text-3xl text-white">
                    {course.level}
                  </h3>
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Icon name="Clock" size={20} className="text-gray-500" />
                      <span className="text-gray-700">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon name="BookOpen" size={20} className="text-gray-500" />
                      <span className="text-gray-700">{course.lessons}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold">
                    Выбрать курс
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
              Отзывы студентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят те, кто уже учится с нами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx} className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">Студент EnglishPro</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="font-heading font-bold text-xl">EnglishPro</span>
              </div>
              <p className="text-gray-400">
                Современная онлайн школа английского языка
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Курсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Начальный</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Средний</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Продвинутый</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@englishpro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 EnglishPro. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Начни учить английский уже сегодня!
            </DialogTitle>
            <DialogDescription>
              Заполни форму и получи первый бесплатный урок
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input 
                id="name" 
                placeholder="Как тебя зовут?" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="твой@email.ru" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+7 (999) 123-45-67" 
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setIsDialogOpen(false)}
            >
              Отмена
            </Button>
            <Button 
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold"
              onClick={() => {
                console.log('Регистрация:', formData);
                setIsDialogOpen(false);
                setFormData({ name: "", email: "", phone: "" });
              }}
            >
              <Icon name="Rocket" className="mr-2" size={18} />
              Поехали!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;