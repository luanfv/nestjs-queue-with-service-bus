import { OnModuleDestroy } from '@nestjs/common';
import { ServiceBusProducer } from './service-bus.producer';
import { ServiceBusMessage } from '@azure/service-bus';

export abstract class ServiceBusAbstract implements OnModuleDestroy {
  private readonly sbProducer: ServiceBusProducer;

  constructor(connectionString: string, queueName: string) {
    this.sbProducer = new ServiceBusProducer();
    this.sbProducer.init(connectionString, queueName);
  }

  async publish(message: ServiceBusMessage): Promise<void> {
    await this.sbProducer.publish(message);
  }

  onModuleDestroy(): void {
    this.sbProducer.close();
  }
}
