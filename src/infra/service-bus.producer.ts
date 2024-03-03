import { ServiceBusClient, ServiceBusSender } from '@azure/service-bus';

export class ServiceBusProducer {
  private client: ServiceBusClient;
  private producer: ServiceBusSender;
  private _isInit = false;

  init(connectionString: string, queueName: string) {
    this.client = new ServiceBusClient(connectionString);
    this.producer = this.client.createSender(queueName);
    this._isInit = true;
  }

  isInit(): boolean {
    return this._isInit;
  }

  async publish(messageBody: any): Promise<void> {
    await this.producer.sendMessages(messageBody);
  }

  async close(): Promise<void> {
    await this.producer?.close();
    await this.client?.close();
    this._isInit = false;
  }
}
